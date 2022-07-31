Objectives
# Motivates the need for something like Big O Notation
# Describe what Big O Notation Is
# Simplify BIg O Expressions 
# Define "Time complexity" and "space complexity"
# Evaluate the time complexity and space complexity of different algorithms using BIg O notation
# Describe what is logarithm is

Big O shorthands
* Analyzing complexity with big O can get complicated 
* There are several rules of thumbs that can help
* These rules won't ALWAYS work, but are a helpful starting point.

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant.
4. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside of the loop.


# Space Complexity;
WE can use big O notation to analyze space complexity:
    How much additional memory do we need to allocate in order to run the code in our algorith.

    Auxiliary Space complexity to refer ta space required by the algoritm, not including space taken up by the inputs.

    Thumb of Rules space complexity;
    * Most primitives (booleans, numbers,undefined, null) are constant space

    * Strings require O(n) space (where n is the string length)
    * Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

# Thumb of rule
    The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

    eg:- log(8) = 3 // 8/2=4/2=2/2=1 = 3
        log(25) = 25/2=12.5/2=6.25/2=1.5625/0.78125 = 4.64

# Logarithm Complexity:-
    1. best is :- 
            1. O(1)
            2. O(log n)
            3. O(n)
            4. O(n log n)
            5. O(n^2)


# Objects


# Big O of Arrays
    insertion - It depends ...
    Removal -   It depends ...

        Searching - O(n)
        Access -    O(1)

# Big O of Array Operationa
    1. push -  O(1);
    2. pop  -  O(1);
    3. shift - O(n);
    4. unshift - O(n);
    5. concat - O(n);
    6. slice - O(n);
    7. splice - O(n);
    8. sort -   O(n*logn);
    9. forEach/map/filter/reduce/etc - O(n)

# What is an ALGORITHM?
:- A process or set of steps to accomplish a certain task.


# How DO you improve?
    1. Devise a plan for solving problems
    2. Master common problem solving patterns

    # Understant the Problem
        1. Can I restate the problem in my own words.
            # implement addition
        2. What are the input that go into the problem?
            # two number
        3. What are the output that should come from the solution to the problem.
        4. Can the output be determined from the inputs? Do I have enoght info to solve the problems? 
        5. How should I label the important picece of data that are a part of the problem?


E.g:- Write a function that take two number and return their sum.

# Explore Examples
    1. Start with simple examples
        eg: charCount('aaaa'); // {a:4}
        eg: charCount('hello'); // {h:1,e:1,l:2,o:1}
    2. Progress to more complex examples

    3. Explore examples with empty Inputs
        eg: charCount("") ; // {} null, undefine
    4. Explore Examples with Invalid Inputs
        eg: charCount(number) // through error

    eg. Write a function which take in a string and returns counts of each character in the string.

# Problem Solving
    1. understanding the problem
    2. Explore Concrete Examples
    3. Break It Down/ Explicitly write out the steps you need to take.
        (THis force you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details)

            eg. Write a function which take in a string and returns counts of each character in the string.

function charCount(str){
    // make object to return at end
    // loop over string, for each character ...;
    //if char is number/letter And key in object, add one to count;
    //if char is number/letter And key not in object, add it to object and set value to 1;
    // If character is something else (space,period,etc) don't do anything;

    // return object at end
    
}

# SIMPLIFY
    1. Find the core difficulty in what you're trying to do.
    2. Temporarily ignore that difficulty
    3. Write a simplified solution
    4. Then incorporte that difficulty back in

          eg. Write a function which take in a string and returns counts of each character in the string.

         function charCount(str){
        // make object to return at end
            let result = {};

    // loop over string, for each character ...;
    // If character is something else (space,period,etc) don't do anything;
    for(let i = 0; i< str.length;i++){
        let char = str[i].toLowerCase()
        if(/[a-z0-9]/.test(char)){
    //if char is number/letter And key in object, add one to count;
            if(result[char] > 0){
                result[char]++;
            }
            //if char is number/letter And key not in object, add it to object and set value to 1;
            else{
                result[char] = 1;
            }
        }
    }
    // return object at end
            return result;
    }

# How Do you Improve
    1. Devise a plan for solving problems.
    2. Master common problem solving patterns:- 
        1. Frequency Counter
        2. Multiple Pointers
        3. Sliding Window
        4. Divide and Conquer
        5. Dynamic Programming
        6. Greedy Algorithms
        7. Backtracking
        8. Many More!
        
