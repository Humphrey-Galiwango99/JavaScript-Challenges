// let sen = prompt()
// function LongestWord(sen){


// }

function longestWord(sen) { 
    sen=sen.replace(/[^a-zA-Z ]/gi,'')
    words = sen.split(" ")
    longestWord = words[0]
    for (i = 0; i<words.length; i ++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i]  
        }
    }
   console.log(longestWord);
  }
  longestWord("Ddembe galiwango GALIWANGO Humphrey")