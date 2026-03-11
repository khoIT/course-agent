#!/usr/bin/env python3
"""
Backward-compatible wrapper for gk-help.

Canonical implementation lives at:
  .claude/skills/gk-help/scripts/gk-help.py
"""

import runpy
import sys
from pathlib import Path


def main() -> int:
    target = (
        Path(__file__).resolve().parent.parent
        / "skills"
        / "gk-help"
        / "scripts"
        / "gk-help.py"
    )

    if not target.exists():
        print(f"Error: canonical gk-help script not found: {target}", file=sys.stderr)
        return 1

    # Preserve argv; run canonical script as __main__.
    runpy.run_path(str(target), run_name="__main__")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
