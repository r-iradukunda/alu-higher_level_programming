#!/usr/bin/node

if (process.argv.length <= 2) {
    console.log(0);
  } else if (process.argv.length === 3) {
    console.log(0);
  } else {
    const integers = process.argv.slice(2).map(Number).filter(Number.isInteger);
    if (integers.length < 2) {
      console.log(0);
    } else {
      integers.sort((a, b) => b - a);
      console.log(integers[1]);
    }
  }