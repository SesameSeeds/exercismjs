/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const Isogram = function Isogram(input) {
  this.input = input;
};

Isogram.prototype.isIsogram = function isIsogram() {
  const chars = this.input.toLowerCase().replace(/[\-\s]/g, '').split('');

  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] === chars[j]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = Isogram;
