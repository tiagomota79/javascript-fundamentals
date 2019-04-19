'use strict';
function whatsMyAgeAgain() {
  if (this === undefined) {
    return 18;
  }
  return this.age;
  // if this is undefined, return 18
  // else, return this.age
}

module.exports = whatsMyAgeAgain;
