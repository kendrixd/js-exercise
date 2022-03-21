const paragraphInput = "Smart people learn from Everything and everyone, average people from their experience, stupid people already, have all the answers";


function getLongestWordWithHighestVowel(stringInput){

    // remove non-alphabet characters
    // split words by spaces
    // filter empty words caused by splitting using ' '
    const filteredString = stringInput.replace(/[^a-z ]/gi, '').split(' ').filter(Boolean);
    

    let longestWord = '';
    for (let currentWord of filteredString) {
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;

        } else if (currentWord.length == longestWord.length) {

            // if there is the same amount of vowels, retain the current one
            if (currentWord.replace(/[^aeiou]/gi, '').length > longestWord.replace(/[^aeiou]/gi, '').length){
                longestWord = currentWord;
            }
        }
    }
    console.log(longestWord);
    return longestWord;
}

getLongestWordWithHighestVowel(paragraphInput);

// exercise questions:
// 1. should hyphenated words(goal-oriented, passion-driven) count as one word or two?
// 2. which word should be chosen should there be the same amount of vowels? (agile, elope)
