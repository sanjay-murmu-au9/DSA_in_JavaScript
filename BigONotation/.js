// Write a function that accepts a string input and return
// a reversed copy

function reverse(s) {
    let result = '';
    for (let i = s.length; i >= 0; i--) {
        console.log(i, "<<<<<<<<<")
        result += s[i]
    }
    return result;
}

let sanjay = 'sanjay murmu'
reverse(sanjay)


// # suppose we want a function that calculates the sum of all numbers from 1 up
// to (and including) some number n.

function addUpTo(n) {
    let totalNumber = 0;
    for (let i = 1; i <= n; i++) {
        totalNumber += i
    }
    return totalNumber;

}

//addUpTo(6)

// To find time taking
let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// or

function addUpTo(n) {
    return n * (n + 1) / 2;
}

// addUpTo(6)

let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)


// Another Example
function countUpAndDown(n) {
    console.log('Going up!');
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('At the top! \nGoing down...');
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log('Back down. Bye!')
}

countUpAndDown(10); // time complexity O(n)

function printAllPair(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

printAllPair(10) // Time complexity O(n^2)

function logAtLeast5(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(5) // time O(n)

function logAtMost5(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

logAtMost5(6) // O(1)

// Space Complexity

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

let arr = [1, 2, 3, 4, 5, 6]
sum(arr) // space comlexity = O(1)

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr;
}

double([1, 2, 3]) //space complexity:  O(n)