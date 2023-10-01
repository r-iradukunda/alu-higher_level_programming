#!/usr/bin/node

// Global Variable
let count = 0;

exports.logMe = function (item) {
  console.log(`${count}: ${item}`);
  count++;
};