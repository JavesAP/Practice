// 12-9-24(remake)
// Write a function that takes two sorted lists of numbers 
// and returns a single sorted list containing all elements from both lists.

function mergedSortedList(sortedArrOne, sortedArrTwo) {
  return sortedArrOne.concat(sortedArrTwo).sort((a,b) => a - b)
}

// mergedSortedList([1,3,1], [0,3,-1]) --> [-1, 0, 1, 1, 3, 3]



// 12-10-24
//  Write a function that takes a list (array) and returns a 
// new list with all duplicate elements removed.

function uniqueList(arr) {
  const onlyOnceArr = []
    arr.forEach((item) => {
    if (!onlyOnceArr.includes(item)) onlyOnceArr.push(item)
  })
  return onlyOnceArr
}

// uniqueList([1,3,1,0,5,5,3]) --> [1,3,0,5]