#!/usr/bin/node
const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 0-readme.js <file_path>');
  process.exit(1);
}

// Get the file path from command line arguments
const filePath = process.argv[2];

// Read and print the content of the file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

