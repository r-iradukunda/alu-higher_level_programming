#!/usr/bin/node

if (process.argv[2] !== undefined && process.argv[3] !== undefined) {
  console.log(process.argv[2] + ' is ' + process.argv[3]);
} else {
  const arg1 = process.argv[2] === undefined ? process.argv[2] : 'HBTN';
  const arg2 = process.argv[3] === undefined ? process.argv[3] : 'HBTN';
  console.log(arg1 + ' is ' + arg2);
}
