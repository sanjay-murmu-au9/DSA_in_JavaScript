let instructors = {
    firstName: 'Kelly',
    isInstructors: 'true',
    favoriteNumbers: [1, 2, 3, 4]
}

//# Frequency Counters
//   This pattern uses objects or sets to collect values/frequencies of values.
//   This can often avoid the need for nested loops or O(N^2) operations
//   with arrays/strings.

// Eg Write a function called same, which accepts two arrays.
// The function should return true If every value in the array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

same([1, 2, 3], [4, 1, 9]) // true;
same([1, 2, 3], [1, 9])  // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

function same(arr1, arr2) {
    // let result = []
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1) // index & delete 1;

    }
    return true;
}
same([1, 2, 3], [4, 1, 9]) // O(n^2)

// With O(n) fewer loop

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        console.log(frequencyCounter1, '<<<<<<<<frequencyCounter1');
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;


}


same([1, 2, 3, 4], [9, 1, 4, 16])

//or litte better
function same(arr1,arr2){
  if(arr1.length !== arr2.length) return false;
  let frequancyCounter1 = {};
  let frequancyCounter2 = {}
  
  for(let i=0;i<arr1.length;i++){
    frequancyCounter1[arr1[i]] = (frequancyCounter1[arr1[i]] || 0)+1;
    frequancyCounter2[arr2[i]] = (frequancyCounter2[arr2[i]] || 0)+1;
  }
  
  for(let key in frequancyCounter1){
    let squaredKey = (key ** 2);
    if(frequancyCounter2[squaredKey] !== frequancyCounter1[key]){
      return false;
    }
  }
  
  return true;
}



console.log(same([1,2,3],[1,4,9])) // true
console.log(same([1,2,3],[9,4,10])) // false

// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phase or name formed by rearraging the letters of another, such as cinema,formed from iceman.

validAnagram('', '') // true;
validAnagram('aaz', 'zza') // false;
validAnagram('rat', 'car') // false;
validAnagram('awesome', ' awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwistime', 'timetwisttext') // true


function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {

    }

}

anagram('', '')
