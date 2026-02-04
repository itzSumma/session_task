/**
 * Problem 1: Word Frequency Counter
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences


Ignore extra spaces


Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }


 */

// function wordFrequency(sentence) {


//   // console.log(sentence);
//   sentence = sentence.toLowerCase(); //ignore now but it will be need in future
//   sentence = sentence.trim(); //ignore now but it will be need in future

//   let words = sentence.split(" ");
// let countingWords = {};
//   for (let word of words) {

//     // console.log(word);
//     if (countingWords.hasOwnProperty(word)){
//         // countingWords +=1;
//         //countingWords[word] = countingWords[word] + 1; 
//         countingWords[word] ++;
//     }
// else{ countingWords[word] = 1; }
//   }
//   return countingWords;
// }

// let Output = wordFrequency("  I love JS and I love coding and JS is   fun Fun  ");
// console.log(Output);



                                        //New turn





//  function wordFrequency (sentence) {
// // sentence = sentence.toLowerCase();

// // sentence = sentence.trim();
//     let words = sentence.split(" ");
//     // console.log(words);
//     let countingWords = {};
//     for ( let word of words){
//            // console.log(word);
//     if (countingWords.hasOwnProperty(word)){
//         countingWords[word]++;
//     }
//     else{
//         countingWords[word]=1;
//     }
// }
    
// return countingWords
//     }


// let Output = wordFrequency( "I love JS and I love coding and JS is fun");
// console.log(Output);

// function wordFrequency (sentence){
//     let words = sentence.split(" ")
//     let countingWords = {};
// for (let word of words){
// // console.log(word);
// if (countingWords.hasOwnProperty(word)) {
//     countingWords[word]++;
// }
// else{
//     countingWords[word]=1;
// }
// }
// return countingWords;
// }
// let output = wordFrequency("I love JS and I love coding and JS is fun");
// console.log(output);


function chaFrequency(words){
  words=words.toLowerCase().trim();
  
let characters = words.split("");
 let countword = {};
for(let character of characters){
    // console.log(character)
    if(countword[character]){
        countword[character]++;}

else{
   countword[character]=1;

}
}

return countword;
}
let output = chaFrequency("HELLO WORLD");
console.log(output);
