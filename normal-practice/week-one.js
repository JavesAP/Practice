// 12-2-2024
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string containing letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  const stringLetters = str.toLowerCase().split('')
  const checkingArr = []
  let boolean = true
    
  stringLetters.forEach((letter) => {
    if (!checkingArr.includes(letter)) checkingArr.push(letter)
    else boolean = false
  })
    
  return boolean
}

// console.log(isIsogram('David')) --> false
// console.log(isIsogram('Olympic')) --> true


// 12-2-2024
// Write a function that checks if a given string is a palindrome 
// meaning it reads the same forwards and backwards. 
// Ensure the function ignores spaces, punctuation, and 
// case differences when checking for a palindrome

function isPalindrome (word) {
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '').split('')
  let bool = true
  
  cleanedWord.forEach((letter, index, array) => {
    const endLetter = array[array.length - (index + 1)]
    if (letter != endLetter) bool = false
  })
  
  return bool
}

//console.log('Racecar') --> true
//console.log('steven') --> false