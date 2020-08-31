function Entry() {
  this.title = "";
  this.body = "";
}

Entry.prototype.getNumWordEntry = function() {
  let wordArray = this.body.split(" ");
  return wordArray.length;
}

Entry.prototype.getNumVowelsCons = function() {
  let vowels = ["a", "e", "i", "o", "u"];
  let letterArray = this.body.split("");
  let numVowels = 0;
  let numConsonants = 0;
  letterArray.forEach(function(letter) {
    if (letter.includes(vowels)) {
      numVowels += 1;
    } else {
      numConsonants += 1;
    }
  });
  let numVowConArray = [numVowels, numConsonants];
  return numVowConArray;
}

Entry.prototype.getTeaser = function() {
  let endSen = [".", "!", "?"]
  let wordArray = this.body.split(" ");
  let teaserArray = [];
  for (i=0; i<8; i++) {
    teaserArray.push(wordArray[i]);
    if (!wordArray[i].includes(endSen)) {
      break;
    }
  }
  let teaser = teaserArray.join(" ");
  return teaser;
}