#!/usr/bin/env python3
"""
Course image generator — Gemini Nano Banana (free), DALL-E 3 (paid), or Pollinations (free fallback).

Auto-detection precedence: DALL-E 3 > Gemini Nano Banana > Pollinations

Usage:
    python generate.py "prompt" -o output.png [--style professional] [--size 1024x1024]
    python generate.py "prompt" -o output.png --engine gemini     # Nano Banana (free tier)
    python generate.py "prompt" -o output.png --engine pollinations  # free, no API key
    python generate.py --manifest images.json
"""

import argparse
import base64
import json
import os
import sys
import time
from pathlib import Path
from urllib.parse import quote
from urllib.request import urlretrieve, Request, urlopen
from urllib.error import HTTPError

# Centralized env resolver
CLAUDE_ROOT = Path(__file__).parent.parent.parent.parent
sys.path.insert(0, str(CLAUDE_ROOT / "scripts"))
try:
    from resolve_env import resolve_env
    _CENTRALIZED = True
except ImportError:
    _CENTRALIZED = False


# Style presets — appended to user prompt for consistent visual language
STYLE_PRESETS = {
    "professional": "Clean, modern illustration style. Corporate-friendly with minimal background. Professional color palette. No text or labels in the image.",
    "flat": "Flat design illustration. Bold solid colors, geometric shapes, no shadows or gradients. Minimal and clean. No text in the image.",
    "watercolor": "Soft watercolor painting style. Warm, inviting tones. Artistic and slightly abstract. No text in the image.",
    "sketch": "Hand-drawn sketch style on white background. Black ink lines with minimal color accents. Whiteboard aesthetic. No text in the image.",
    "infographic": "Clean infographic illustration style. Structured layout with clear visual hierarchy. Bold colors on white background. Minimal text, focus on visual elements.",
}


def _get_key(name: str) -> str:
    """Resolve an API key via centralized hierarchy or environment."""
    if _CENTRALIZED:
        return resolve_env(name, skill="course-image-gen") or ""
    return os.getenv(name, "")


def _detect_engine() -> str:
    """Auto-detect best available engine. Precedence: DALL-E > Gemini > Pollinations."""
    openai_key = _get_key("OPENAI_API_KEY")
    if openai_key and openai_key != "YOUR_NEW_KEY_HERE":
        return "dalle"
    gemini_key = _get_key("GEMINI_API_KEY")
    if gemini_key:
        return "gemini"
    return "pollinations"


# --- Gemini Nano Banana Engine ---

def generate_gemini(prompt: str, style: str = "professional",
                    size: str = "1024x1024", output: str = "output.png") -> str:
    """Generate image via Gemini Nano Banana (free tier)."""
    try:
        from google import genai
    except ImportError:
        print("Error: google-genai not installed. Run: pip install google-genai", file=sys.stderr)
        sys.exit(1)

    style_suffix = STYLE_PRESETS.get(style, STYLE_PRESETS["professional"])
    full_prompt = f"{prompt}. {style_suffix}"

    api_key = _get_key("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not found.", file=sys.stderr)
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    print(f"Generating (Gemini Nano Banana — free tier): {prompt[:80]}...")
    print(f"Style: {style} | Size: {size}")

    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=full_prompt,
        config=genai.types.GenerateContentConfig(
            response_modalities=["image", "text"],
        ),
    )

    # Extract image from response
    output_path = Path(output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.mime_type.startswith("image/"):
            with open(str(output_path), "wb") as f:
                f.write(part.inline_data.data)
            print(f"Saved: {output_path}")
            return str(output_path)

    print("Error: No image in Gemini response", file=sys.stderr)
    sys.exit(1)


# --- Pollinations Engine (free fallback) ---

def generate_pollinations(prompt: str, style: str = "professional",
                          size: str = "1024x1024", output: str = "output.png") -> str:
    """Generate image via Pollinations.ai GET API (free, no API key needed)."""
    style_suffix = STYLE_PRESETS.get(style, STYLE_PRESETS["professional"])
    full_prompt = f"{prompt}. {style_suffix}"

    width, height = size.split("x")

    output_path = Path(output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    print(f"Generating (Pollinations.ai — free): {prompt[:80]}...")
    print(f"Style: {style} | Size: {size}")

    # Truncate to keep URL length manageable (Pollinations 500-error on long URLs)
    truncated = full_prompt[:300]
    encoded_prompt = quote(truncated)
    seed = abs(hash(prompt)) % 100000
    url = (
        f"https://image.pollinations.ai/prompt/{encoded_prompt}"
        f"?width={width}&height={height}&nologo=true&seed={seed}"
    )

    max_retries = 4
    for attempt in range(max_retries):
        try:
            req = Request(url, headers={"User-Agent": "Mozilla/5.0 (course-image-gen/1.0)"})
            with urlopen(req, timeout=180) as resp:
                with open(str(output_path), "wb") as f:
                    f.write(resp.read())
            print(f"Saved: {output_path}")
            return str(output_path)
        except HTTPError as e:
            if e.code == 429 and attempt < max_retries - 1:
                wait = (attempt + 1) * 15
                print(f"Rate limited (429). Waiting {wait}s before retry {attempt + 2}/{max_retries}...")
                time.sleep(wait)
            else:
                raise


# --- DALL-E 3 Engine (paid) ---

def generate_dalle(prompt: str, style: str = "professional", size: str = "1024x1024",
                   quality: str = "standard", output: str = "output.png") -> str:
    """Generate image via OpenAI DALL-E 3 (paid, requires API key)."""
    try:
        from openai import OpenAI
    except ImportError:
        print("Error: openai package not installed. Run: pip install openai", file=sys.stderr)
        sys.exit(1)

    style_suffix = STYLE_PRESETS.get(style, STYLE_PRESETS["professional"])
    full_prompt = f"{prompt}\n\nStyle: {style_suffix}"

    client = OpenAI(api_key=_get_key("OPENAI_API_KEY"))

    print(f"Generating (DALL-E 3 — paid): {prompt[:80]}...")
    print(f"Style: {style} | Size: {size} | Quality: {quality}")

    response = client.images.generate(
        model="dall-e-3",
        prompt=full_prompt,
        size=size,
        quality=quality,
        n=1,
    )

    image_url = response.data[0].url
    revised_prompt = response.data[0].revised_prompt

    output_path = Path(output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    urlretrieve(image_url, str(output_path))
    print(f"Saved: {output_path}")
    if revised_prompt:
        print(f"DALL-E revised prompt: {revised_prompt[:120]}...")
    return str(output_path)


# --- Router ---

def generate_image(prompt: str, style: str = "professional", size: str = "1024x1024",
                   quality: str = "standard", output: str = "output.png",
                   engine: str = "auto") -> str:
    """Generate image using the selected engine."""
    if engine == "auto":
        engine = _detect_engine()
        print(f"Auto-detected engine: {engine}")

    if engine == "gemini":
        try:
            return generate_gemini(prompt, style=style, size=size, output=output)
        except Exception as e:
            if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                print(f"Gemini rate limited — falling back to Pollinations")
                return generate_pollinations(prompt, style=style, size=size, output=output)
            raise
    elif engine == "pollinations":
        return generate_pollinations(prompt, style=style, size=size, output=output)
    else:
        return generate_dalle(prompt, style=style, size=size, quality=quality, output=output)


def generate_from_manifest(manifest_path: str, engine: str = "auto") -> list:
    """Generate multiple images from a manifest JSON file."""
    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    output_dir = Path(manifest.get("output_dir", "."))
    results = []

    for img in manifest.get("images", []):
        img_id = img["id"]
        prompt = img["prompt"]
        style = img.get("style", "professional")
        size = img.get("size", "1024x1024")
        quality = img.get("quality", "standard")
        output_file = output_dir / f"{img_id}.png"

        print(f"\n--- [{img_id}] ---")
        if "usage" in img:
            print(f"For: {img['usage']}")

        try:
            path = generate_image(prompt, style=style, size=size, quality=quality,
                                  output=str(output_file), engine=engine)
            results.append({"id": img_id, "status": "ok", "path": path})
        except Exception as e:
            print(f"Error generating {img_id}: {e}", file=sys.stderr)
            results.append({"id": img_id, "status": "error", "error": str(e)})

    ok = sum(1 for r in results if r["status"] == "ok")
    print(f"\n=== Done: {ok}/{len(results)} images generated ===")
    return results


def main():
    parser = argparse.ArgumentParser(
        description="Generate course illustrations (DALL-E 3 / Gemini Nano Banana / Pollinations)"
    )
    parser.add_argument("prompt", nargs="?", help="Image description")
    parser.add_argument("-o", "--output", default="output.png", help="Output file path")
    parser.add_argument("--style", default="professional",
                        choices=list(STYLE_PRESETS.keys()),
                        help="Style preset (default: professional)")
    parser.add_argument("--size", default="1024x1024",
                        help="Image size WxH (default: 1024x1024)")
    parser.add_argument("--quality", default="standard",
                        choices=["standard", "hd"],
                        help="Quality — DALL-E only (default: standard)")
    parser.add_argument("--engine", default="auto",
                        choices=["auto", "dalle", "gemini", "pollinations"],
                        help="Engine: auto (DALL-E > Gemini > Pollinations), dalle, gemini, pollinations")
    parser.add_argument("--manifest", help="JSON manifest for batch generation")

    args = parser.parse_args()

    if args.manifest:
        generate_from_manifest(args.manifest, engine=args.engine)
    elif args.prompt:
        generate_image(args.prompt, style=args.style, size=args.size,
                       quality=args.quality, output=args.output, engine=args.engine)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == "__main__":
    main()
