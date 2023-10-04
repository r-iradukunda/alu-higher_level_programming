#!/usr/bin/node
const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
	console.error('usage: node 0-readme.js <file-path>');
	process.exit(1);
}

const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // Handle errors, and print the error object
    console.error(err);
  } else {
    // Print the file content
    console.log(data);
  }
});
