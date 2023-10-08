#!/usr/bin/node

const input = parseInt(process.argv[2]);

function computeFactorial (n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * computeFactorial(n - 1);
}

console.log(computeFactorial(input));
