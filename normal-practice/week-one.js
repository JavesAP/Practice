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