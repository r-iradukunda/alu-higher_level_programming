#!/usr/bin/node

const firstArg = process.argv[2]; // Get the first argument

if (/^-?\d+$/.test(firstArg)) {
  const intValue = parseInt(firstArg); // Convert to an integer
  console.log(`My number: ${intValue}`);
} else {
  console.log('Not a number');
}
