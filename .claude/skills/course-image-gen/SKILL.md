---
name: course-image-gen
description: Generate course illustrations and visual aids using OpenAI DALL-E 3. Use when course materials need diagrams, concept illustrations, scenario visuals, or infographics for slides and handouts.
version: 1.0.0
---

# Course Image Generator

Generate professional illustrations for course materials using OpenAI DALL-E 3. Produces visuals that reinforce learning — concept diagrams, scenario illustrations, process flows, metaphor visuals.

## When to Use

- Course slides need visual aids beyond text and bullet points
- Facilitator guide references a visual that doesn't exist yet
- Activity instructions benefit from a scenario illustration
- Handout needs a concept diagram or infographic-style visual
- Any time "a picture is worth a thousand words" in course content

## Setup

Set your OpenAI API key via the centralized env resolver:

```bash
# Option 1: Project-level (recommended)
echo "OPENAI_API_KEY=sk-..." >> .claude/skills/course-image-gen/.env

# Option 2: User-level (shared across projects)
echo "OPENAI_API_KEY=sk-..." >> ~/.claude/.env

# Option 3: Runtime
export OPENAI_API_KEY=sk-...
```

## Usage

```bash
# Basic generation
.claude/skills/course-image-gen/.venv/Scripts/python.exe .claude/skills/course-image-gen/scripts/generate.py "A customer service agent actively listening to an upset customer" -o courses/my-course/images/active-listening.png

# With style preset
.claude/skills/course-image-gen/.venv/Scripts/python.exe .claude/skills/course-image-gen/scripts/generate.py "Team collaboration around a whiteboard" -o output.png --style professional

# With custom size
.claude/skills/course-image-gen/.venv/Scripts/python.exe .claude/skills/course-image-gen/scripts/generate.py "Empathy mapping diagram" -o output.png --size 1792x1024

# Batch generation from a manifest file
.claude/skills/course-image-gen/.venv/Scripts/python.exe .claude/skills/course-image-gen/scripts/generate.py --manifest courses/my-course/image-manifest.json
```

## Options

| Option | Default | Description |
|--------|---------|-------------|
| `prompt` | (required) | Image description — be specific about scene, style, mood |
| `-o, --output` | `./output.png` | Output file path |
| `--style` | `professional` | Style preset: `professional`, `flat`, `watercolor`, `sketch`, `infographic` |
| `--size` | `1024x1024` | Image size: `1024x1024`, `1792x1024` (landscape), `1024x1792` (portrait) |
| `--quality` | `standard` | Quality: `standard` or `hd` |
| `--manifest` | (none) | JSON file with batch image specs |

## Style Presets

Each preset appends style instructions to your prompt:

| Preset | Best For | Style Suffix |
|--------|----------|-------------|
| `professional` | Slides, handouts | Clean, modern, corporate-friendly, minimal background |
| `flat` | Diagrams, icons | Flat design, bold colors, no shadows, geometric shapes |
| `watercolor` | Emotional topics | Soft watercolor style, warm tones, artistic |
| `sketch` | Brainstorming, drafts | Hand-drawn sketch style, whiteboard aesthetic |
| `infographic` | Data, processes | Infographic style, clear labels, structured layout |

## Manifest Format (Batch Generation)

```json
{
  "course": "customer-service-excellence",
  "output_dir": "courses/customer-service/images",
  "images": [
    {
      "id": "active-listening",
      "prompt": "A customer service agent demonstrating active listening — leaning forward, making eye contact, taking notes",
      "style": "professional",
      "size": "1792x1024",
      "usage": "Slide 5: Active Listening Techniques"
    },
    {
      "id": "escalation-flowchart",
      "prompt": "A clear flowchart showing customer complaint escalation path with 4 decision points",
      "style": "infographic",
      "usage": "Handout page 3"
    }
  ]
}
```

## Integration with Course Designer

During Phase 3 (Material Generation), the course-designer workflow can spawn a Visual Designer agent to:
1. Read the lesson plan and identify key concepts that benefit from visuals
2. Generate an `image-manifest.json` with prompts for each visual
3. Run batch generation
4. Reference generated images in slides and handouts

## Security

- API key resolved via centralized `.env` hierarchy — never hardcoded
- Never commit `.env` files (already in `.gitignore`)
- Images saved locally — no external hosting
