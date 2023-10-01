#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
    let numOccurrences = 0; // Use let to define numOccurrences and initialize it to 0
    for (const element of list) {
      if (element === searchElement) {
        numOccurrences += 1;
      }
    }
    return numOccurrences;
  };