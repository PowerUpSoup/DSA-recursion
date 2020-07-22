
//Calculate the nth triangular number. 
//A triangular number counts the objects 
//that can form an equilateral triangle. 
//The nth triangular number is the number 
//of dots composing a triangle with n dots 
//on a side, and is equal to the sum of 
//the natural numbers from 1 to n. This is
//the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function nthTriangleNumber(count, levels, objects) {
    if (count === (levels + 1)) {
        return objects;
    }
    console.log("At level " + count + " we add " + count + " objects, to get " + (count + objects) + ".")
    return nthTriangleNumber((count + 1), levels, (objects + count))
}

let count = 1;
let levels = 9;
let objects = 0;
console.log("For a total of " + (nthTriangleNumber(count, levels, objects)) + " objects!")