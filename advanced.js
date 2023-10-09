const wordList = require("./word_list.js");

// DO NOT CHANGE ANY CODE ABOVE THIS LINE

//console.log(wordList);
const firstThreeWords = wordList.slice(0,3);
//console.log(firstThreeWords);
const lastThreeWords = wordList.slice(-3);
//console.log(lastThreeWords);
const wordCount = wordList.length;
//console.log(wordCount);
const twoLetterWords = wordList.filter((word) => word.length === 2);
//console.log(twoLetterWords);
const longestWord = wordList.sort(function(a,b){return b.length-a.length})[0];
//console.log(longestWord);
const containsC = wordList.filter(word => word.match(/c/ig));
//console.log(containsC);
const reversedWords = wordList.map(elem => {
    let newString = "";
    for (let i = elem.length - 1; i >= 0; i--) {
        newString += elem[i];
    }
    return newString;
})
//console.log(reversedWords);
const noVowels = wordList.filter((elem) => !(/[aeiou]+/.test(elem)));
//console.log(noVowels);
const repeatedLetters = wordList.filter((elem) => /([a-z])\1+/.test(elem));
console.log(repeatedLetters);


// Run this file by typing 'node advanced.js' in your terminal.
