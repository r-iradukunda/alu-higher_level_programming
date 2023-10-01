#!/usr/bin/node

const myObject = [[{ type: 'object', value: 12 }], [{ type: 'object', value: 89 }]];
for (const nestedArray of myObject) {
  for (const obj of nestedArray) {
    console.log(obj);
  }
}