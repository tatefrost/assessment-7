// 1 Sum Zero
// runtime complexity: O(n^2) space complexity: O(n)

// function addToZero (arr) {
//   let value = false
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         value = true
//       }
//     }
//   }
//   return value
// }

// console.log(addToZero([4, 2, -3, 9]))



// 2 Unique Characters
// runtime complexity: O(n^2) space complexity: O(n)

// function findUniqueChars (word) {
//   for (let i = 0; i < word.length; i++){
//     for (let j = i + 1; j < word.length; j++) {
//       if (word[i] === word[j])
//         return false 
//     } 
//   }
//   return true
// }

// console.log(findUniqueChars('is-unique?'))



//3 Pangram Sentence
// runtime complexity: O(n) space complexity: O(1)

// let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

// function findPangram (string) {
//   string = string.toLowerCase();
//   return alphabet.every(every => string.includes(every))
// }

// console.log(findPangram('The quick brown fox jumps over the lazy dog!'))



// 4 Longest word
// runtime complexity: O(n^2) space complexity: O(n)

// function findLongestWord (wordsArr) {
//   longest = 0
//   for (let i = 0; i < wordsArr.length; i++) {
//     word = wordsArr[i].split('')
//     for (let j = 0; j < word.length; j++) {
//       if (word.length > longest) {
//         longest = word.length
//       }
//     }
//   }
//   return longest
// }

// console.log(findLongestWord(["hi", "hello"]))