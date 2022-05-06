
// // find the first reapeating;
// const word = 'academind!';
const word = 'academind!';

function findFirstRepo(str) {
    for (let i = 0; i < str.length; i++) { // going through every charater in the string;
        for (let j = i + 1; j < str.length; j++) { //  for every char. we go through al; other following charterist
            if (str[i] === str[j]) {  // findng repeated character.
                return str[i];
            }
        }
    }
}

console.log(findFirstRepo(word));
// nested loop means quadratic time complexity;
// time complexity: O(n^2)

// this can be optimised a more

function findFirstRepo(str) {
    const table = {};
    for (const char of str) {
        if (table[char]) {
            return char;
        }
        table[char] = 1;
    }
}
// time complexity: O(n);
console.log(findFirstRepo(word))