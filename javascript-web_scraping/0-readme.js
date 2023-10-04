#!/usr/bin/node
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
 if (err) {
    console.error(err);
 } else {
    console.log(data);
 }
});

