//Write a recursive function that prints the Fibonacci sequence of a given number. 
//The Fibonacci sequence is a series of numbers in which each number is the sum of 
//the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci 
//sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fibonacci(firstNumber, secondNumber, sequenceLength, count) {
    //base case
    if (count === (sequenceLength)) {
        return (firstNumber + secondNumber);
    }

    //recursive case
    console.log(firstNumber + secondNumber);
    return fibonacci(secondNumber, (firstNumber + secondNumber), sequenceLength, (count + 1)); 

}

let firstNumber = 0;
let secondNumber = 1;
let sequenceLength = 7;
let count = 2;
console.log(1)
console.log(fibonacci(firstNumber, secondNumber, sequenceLength, count));