#!/usr/bin/env python3
"""
Logo conversion script: PDF to PNG
Converts the AVID Signs logo from PDF to high-quality PNG for web use
"""

import subprocess
import sys
import os

def convert_pdf_to_png(input_pdf, output_png, width=200, dpi=300):
    """
    Convert PDF to PNG using available tools on macOS
    """

    # First try with sips (built into macOS)
    try:
        print("Attempting conversion with sips...")
        # Calculate height to maintain aspect ratio (assuming 3:2 ratio for logo)
        height = int(width * 0.6)  # Approximate ratio for the logo

        cmd = [
            'sips',
            '-s', 'format', 'png',
            '-Z', str(width),  # Max dimension
            input_pdf,
            '--out', output_png
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode == 0:
            print(f"Successfully converted {input_pdf} to {output_png} using sips")
            return True
        else:
            print(f"sips failed: {result.stderr}")

    except FileNotFoundError:
        print("sips not found")

    # Try with ImageMagick convert if available
    try:
        print("Attempting conversion with ImageMagick...")
        cmd = [
            'convert',
            '-density', str(dpi),
            input_pdf,
            '-resize', f'{width}x',
            '-quality', '100',
            '-alpha', 'remove',
            '-background', 'white',
            output_png
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode == 0:
            print(f"Successfully converted {input_pdf} to {output_png} using ImageMagick")
            return True
        else:
            print(f"ImageMagick convert failed: {result.stderr}")

    except FileNotFoundError:
        print("ImageMagick not found")

    # Try with magick (ImageMagick v7+)
    try:
        print("Attempting conversion with magick...")
        cmd = [
            'magick',
            '-density', str(dpi),
            input_pdf,
            '-resize', f'{width}x',
            '-quality', '100',
            '-alpha', 'remove',
            '-background', 'white',
            output_png
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode == 0:
            print(f"Successfully converted {input_pdf} to {output_png} using magick")
            return True
        else:
            print(f"magick failed: {result.stderr}")

    except FileNotFoundError:
        print("magick not found")

    print("No suitable conversion tool found. Please install ImageMagick with:")
    print("brew install imagemagick ghostscript")
    return False

def main():
    # File paths
    input_pdf = "/Users/tylerdiorio/avidsignswrapswebsite/public/logo.pdf"
    output_png = "/Users/tylerdiorio/avidsignswrapswebsite/public/logo.png"

    # Check if input file exists
    if not os.path.exists(input_pdf):
        print(f"Error: Input file {input_pdf} not found")
        sys.exit(1)

    # Convert PDF to PNG
    success = convert_pdf_to_png(input_pdf, output_png, width=200, dpi=300)

    if success:
        print(f"Logo converted successfully!")
        print(f"Output: {output_png}")
        print(f"The PNG is optimized for web use at ~200px width")
    else:
        print("Conversion failed. You may need to install additional tools.")
        sys.exit(1)

if __name__ == "__main__":
    main()