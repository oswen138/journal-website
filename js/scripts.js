// Journal Object

function Journal() {
  this.entrys = [];
}

Journal.prototype.addEntry = function(entry) {
  this.entrys.push(entry);
}

// Entry Object

function Entry() {
  this.title = "";
  this.body = "";
}

Entry.prototype.addTitle = function(titleToBeAdded) {
  this.title = titleToBeAdded;
}

Entry.prototype.addBody = function(bodyToBeAdded) {
  this.body = bodyToBeAdded;
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
    if (wordArray[i].includes(endSen)) {
      break;
    }
  }
  let teaser = teaserArray.join(" ");
  return teaser;
}

// Global Variables

let userJournal = new Journal();

// Display Functions

function displayEntry(entryToDisplay) {
  let entryList = $("ul#entrys");
  let htmlForEntryInfo = "";
  entryToDisplay.entrys.forEach(function(entry) {
    htmlForEntryInfo += "<li>" + entry.getTeaser() + "</li>"
  });
  entryList.html(htmlForEntryInfo);
}

// User Interface

$(document).ready(function() {
  $("form#entry-input").submit(function(event) {
    event.preventDefault();
    const title = $("input#title").val();
    const body = $("input#body").val();
    let journalEntry = new Entry();

    journalEntry.addTitle(title);
    journalEntry.addBody(body);
    userJournal.addEntry(journalEntry);
    displayEntry(userJournal);
  });
});