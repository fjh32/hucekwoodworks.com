#!/bin/bash

# Loop through all files that end with .JPEG.jpg.jpg
for file in *.JPEG.jpg.jpg; do
    # Check if there are any .JPEG.jpg.jpg files to rename
    if [[ -e $file ]]; then
        # Remove the .JPEG.jpg.jpg extension and add .jpg extension
        mv -- "$file" "${file%.JPEG.jpg.jpg}.jpg"
    fi
done
