const Anagram = function Anagram(input) {
  this.input = input;
};

Anagram.prototype.matches = function nameToAppeaseLinterGodsDearGawdPlsStopKthnx() {
  const matches = [];
  const input = this.input.toLowerCase();
  const sortedInput = input.split('').sort().join('');

  let mightBeAMatch;
  if (typeof (arguments[0]) === 'string') {
    mightBeAMatch = arguments;
  } else {
    mightBeAMatch = arguments[0];
  }

  for (let i = 0; i < mightBeAMatch.length; i++) {
    const tryThisWord = mightBeAMatch[i].toLowerCase();
    if (tryThisWord !== input && tryThisWord.length === input.length) {
      if (sortedInput === tryThisWord.split('').sort().join('')) {
        matches.push(mightBeAMatch[i]);
      }
    }
  }
  return matches;
};

module.exports = Anagram;
