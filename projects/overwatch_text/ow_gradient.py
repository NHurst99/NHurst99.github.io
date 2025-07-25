#!/usr/bin/env python3
import argparse
from typing import List, Tuple
import json

# ---------------- Core Functions ---------------- #

def hex_to_rgb(hex_color: str) -> Tuple[int, int, int]:
    hex_color = hex_color.strip().lstrip("#")
    if len(hex_color) != 6:
        raise ValueError(f"Bad hex color: {hex_color}")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb: Tuple[int, int, int]) -> str:
    return f"{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}"

def interpolate_color(c1: Tuple[int, int, int], c2: Tuple[int, int, int], t: float) -> Tuple[int, int, int]:
    return tuple(int(round(c1[i] + (c2[i] - c1[i]) * t)) for i in range(3))

def generate_gradient(colors: List[str], steps: int, alpha: str = "FF") -> List[str]:
    if steps <= 0:
        return []
    if len(colors) < 2:
        single = colors[0].lstrip("#")
        return [f"{single.upper()}{alpha}" for _ in range(steps)]
    rgbs = [hex_to_rgb(c) for c in colors]
    segments = len(rgbs) - 1
    base = steps // segments
    remainder = steps % segments
    counts = [base + (1 if i < remainder else 0) for i in range(segments)]
    gradient = []
    produced = 0
    for i in range(segments):
        c1, c2 = rgbs[i], rgbs[i+1]
        n = counts[i]
        if i == segments - 1:
            n = steps - produced
        if n <= 0:
            continue
        for k in range(n):
            t = k / max(n - 1, 1)
            rgb = interpolate_color(c1, c2, t)
            gradient.append(f"{rgb_to_hex(rgb)}{alpha}")
            produced += 1
    return gradient[:steps]

def text_to_gradient(
    text: str,
    colors: List[str],
    alpha: str = "FF",
    smooth: bool = True,
    max_len: int = 200,
    strip_space_color: bool = True
) -> List[str]:
    steps = len(text)
    gradient = []

    if smooth:
        gradient = generate_gradient(colors, steps, alpha=alpha)
    else:
        n_colors = len(colors)
        for i in range(steps):
            color_idx = min(i * n_colors // steps, n_colors - 1)
            hexval = colors[color_idx].lstrip("#").upper()
            gradient.append(f"{hexval}{alpha}")

    result = ""
    for i, ch in enumerate(text):
        if ch == " " and strip_space_color:
            result += ch
        else:
            result += f"<FG{gradient[i]}>{ch}"

    if len(result) > max_len:
        chunks = []
        current = ""
        parts = result.split("<FG")
        for p in parts:
            if not p:
                continue
            segment = "<FG" + p if not current else "<FG" + p
            if len(current) + len(segment) > max_len:
                chunks.append(current)
                current = "<FG" + p
            else:
                current += "<FG" + p
        if current:
            chunks.append(current)
        return chunks
    else:
        return [result]

# ---------------- CLI ---------------- #

def main():
    parser = argparse.ArgumentParser(description="Generate Overwatch FG gradient tags for text.")
    parser.add_argument("--text", "-t", type=str, required=True, help="Text to gradientify.")
    parser.add_argument("--colors", "-c", type=str, required=True,
                        help="Comma-separated list of hex colors, e.g. #FF0000,#00FF00,#0000FF")
    parser.add_argument("--alpha", "-a", type=str, default="FF", help="Alpha channel (00-FF), default FF.")
    parser.add_argument("--smooth", action="store_true", help="Use smooth gradient interpolation.")
    parser.add_argument("--hard", action="store_true", help="Use hard gradient steps (evenly spread colors).")
    parser.add_argument("--max-len", type=int, default=200, help="Max message length (default 200).")
    parser.add_argument("--no-space-color", action="store_true", help="Do not color spaces.")
    args = parser.parse_args()

    colors = [c.strip() for c in args.colors.split(",") if c.strip()]
    if not colors:
        raise SystemExit("No colors provided.")

    smooth = args.smooth and not args.hard

    results = text_to_gradient(
        args.text,
        colors,
        alpha=args.alpha,
        smooth=smooth,
        max_len=args.max_len,
        strip_space_color=args.no_space_color
    )

    for r in results:
        print(r)

if __name__ == "__main__":
    main()
