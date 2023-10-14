#!/bin/bash

# List of files to remove permissions from
files=(
  "0-javascript_is_amazing.js"
  "1-multi_languages.js"
  "10-factorial.js"
  "11-second_biggest.js"
  "12-object.js"
  "13-add.js"
  "2-arguments.js"
  "3-value_argument.js"
  "4-concat.js"
  "5-to_integer.js"
  "6-multi_languages_loop.js"
  "7-multi_c.js"
  "8-square.js"
  "9-add.js"
)

# Iterate through the list and remove all permissions
for file in "${files[@]}"; do
  chmod +x "$file"
done

