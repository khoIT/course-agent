#!/usr/bin/env python3
"""Generate all 8 course images with rate limit handling."""

import time
import sys
import os
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen
from urllib.error import HTTPError

OUTPUT_DIR = Path(__file__).parent

STYLE_PRESETS = {
    "professional": "Clean, modern illustration style. Corporate-friendly with minimal background. Professional color palette. No text or labels in the image.",
    "flat": "Flat design illustration. Bold solid colors, geometric shapes, no shadows or gradients. Minimal and clean. No text in the image.",
    "infographic": "Clean infographic illustration style. Structured layout with clear visual hierarchy. Bold colors on white background. Minimal text, focus on visual elements.",
}

IMAGES = [
    {
        "id": "llm-word-prediction",
        "prompt": "A visual diagram showing how a large language model predicts the next word. Words flowing left to right with probability percentages above candidate next words. Educational style.",
        "style": "infographic",
        "size": "1792x1024",
    },
    {
        "id": "hallucination-warning",
        "prompt": "An AI robot confidently presenting false information on a screen, while a human detective with a magnifying glass checks the facts. Warning triangle symbol. Educational illustration.",
        "style": "professional",
        "size": "1792x1024",
    },
    {
        "id": "six-component-framework",
        "prompt": "A hexagonal diagram showing 6 components of an effective prompt: Role, Tone, Task, Format, Constraints, Audience. Each hexagon has a small icon. Center says Prompt. Clean infographic.",
        "style": "infographic",
        "size": "1024x1024",
    },
    {
        "id": "chat-vs-agent",
        "prompt": "Split screen comparison. Left side: a person typing many messages back and forth with a chatbot with 5 message bubbles. Right side: a person giving one brief to an AI agent robot who autonomously completes multiple steps showing efficiency and automation.",
        "style": "flat",
        "size": "1792x1024",
    },
    {
        "id": "contract-agent-workflow",
        "prompt": "A workflow diagram showing customer order document on the left, flowing through an AI agent in the center, combining with a contract template, outputting a completed contract on the right. Business context. Clean process flow.",
        "style": "infographic",
        "size": "1792x1024",
    },
    {
        "id": "context-engineering-smart-zone",
        "prompt": "A horizontal bar representing an AI context window. Left 40 percent is green labeled Smart Zone with a brain icon. Middle 20 percent is yellow labeled Caution Zone. Right 40 percent is red labeled Dumb Zone with a warning icon. Clean diagram.",
        "style": "infographic",
        "size": "1792x1024",
    },
    {
        "id": "mcp-tools-connection",
        "prompt": "A central AI brain connected to multiple tools via cables: a file folder, a web browser, a database, a calendar, and a document. Each connection is labeled. Model Context Protocol concept. Clean tech illustration.",
        "style": "flat",
        "size": "1024x1024",
    },
    {
        "id": "skill-md-anatomy",
        "prompt": "An exploded view of a SKILL.md document showing its 6 sections as separate cards: Name, Description, Input, Steps, Output, Constraints. Each card has a small icon. Like a blueprint or recipe card layout.",
        "style": "infographic",
        "size": "1024x1024",
    },
]

ENDPOINTS = [
    "https://gen.pollinations.ai/image/{prompt}?width={w}&height={h}&model=flux&nologo=true&seed={seed}",
    "https://image.pollinations.ai/prompt/{prompt}?width={w}&height={h}&model=flux&nologo=true&seed={seed}",
]


def generate_one(img: dict, delay_before: int = 0) -> bool:
    """Generate a single image. Returns True on success."""
    if delay_before > 0:
        print(f"  Waiting {delay_before}s before next request...")
        time.sleep(delay_before)

    prompt = img["prompt"]
    style_suffix = STYLE_PRESETS.get(img["style"], STYLE_PRESETS["professional"])
    full_prompt = f"{prompt}. {style_suffix}"
    w, h = img["size"].split("x")
    seed = abs(hash(prompt)) % 100000
    encoded = quote(full_prompt[:500])
    output_path = OUTPUT_DIR / f"{img['id']}.png"

    print(f"\n--- [{img['id']}] ---")
    print(f"  Prompt: {prompt[:70]}...")
    print(f"  Style: {img['style']} | Size: {img['size']}")

    for endpoint_template in ENDPOINTS:
        url = endpoint_template.format(prompt=encoded, w=w, h=h, seed=seed)
        endpoint_name = "gen.pollinations.ai" if "gen.pollinations" in url else "image.pollinations.ai"

        for attempt in range(3):
            try:
                req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
                with urlopen(req, timeout=180) as resp:
                    data = resp.read()
                    if len(data) < 1000:
                        print(f"  WARNING: Response too small ({len(data)} bytes), retrying...")
                        continue
                    with open(str(output_path), "wb") as f:
                        f.write(data)
                print(f"  OK: Saved {output_path} ({len(data)} bytes) via {endpoint_name}")
                return True
            except HTTPError as e:
                if e.code in (429, 401, 403):
                    wait = (attempt + 1) * 20
                    print(f"  Rate limited ({e.code}) on {endpoint_name}. Wait {wait}s (attempt {attempt+1}/3)...")
                    time.sleep(wait)
                else:
                    print(f"  HTTP {e.code} on {endpoint_name}, trying next endpoint...")
                    break
            except Exception as e:
                print(f"  Error on {endpoint_name}: {e}")
                break

    print(f"  FAILED: Could not generate {img['id']}")
    return False


def main():
    print(f"Generating {len(IMAGES)} course images...")
    print(f"Output directory: {OUTPUT_DIR}")

    results = {"ok": [], "fail": []}

    for i, img in enumerate(IMAGES):
        output_path = OUTPUT_DIR / f"{img['id']}.png"
        if output_path.exists() and output_path.stat().st_size > 1000:
            print(f"\n--- [{img['id']}] --- SKIP (already exists, {output_path.stat().st_size} bytes)")
            results["ok"].append(img["id"])
            continue

        delay = 10 if i > 0 else 0
        ok = generate_one(img, delay_before=delay)
        if ok:
            results["ok"].append(img["id"])
        else:
            results["fail"].append(img["id"])

    print(f"\n=== Results: {len(results['ok'])}/{len(IMAGES)} succeeded ===")
    if results["ok"]:
        print(f"  OK: {', '.join(results['ok'])}")
    if results["fail"]:
        print(f"  FAILED: {', '.join(results['fail'])}")

    # List all files
    print(f"\nFiles in {OUTPUT_DIR}:")
    for f in sorted(OUTPUT_DIR.glob("*.png")):
        print(f"  {f.name}: {f.stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
