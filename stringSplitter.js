//Write a recursive function that splits 
//a string based on a separator (similar 
//to String.prototype.split). Don't use 
//JS array's split function to solve this problem.

//Input: 02/20/2020
//Output: ["02", "20", "2020"]

function stringSplitter(stringToSplit, count, positionToSliceAt, characterToSplitAt, outputArray) {
    //base case (shows the array of slices when the entire string has been run through)
    if (count === (stringToSplit.length + 1) ) 
    {
        return outputArray;
    }
    //recursive case (starting at the first letter, cycles through each character and slices off what came before it, and adds the slice to an array)
    else if (stringToSplit.charAt(count) === characterToSplitAt) 
    {
        outputArray.push(stringToSplit.slice(positionToSliceAt, count));
        positionToSliceAt = (count + 1);
    }
    else if (count === (stringToSplit.length)) {
        outputArray.push(stringToSplit.slice(positionToSliceAt, (stringToSplit.length)))
    }

    return stringSplitter(stringToSplit, (count + 1), positionToSliceAt, characterToSplitAt, outputArray);
}

let stringToSplit = "02/20/2020/have a great day";
let count = 0;
let positionToSliceAt = count;
let characterToSplitAt = "/";
let outputArray = [];
console.log(stringSplitter(stringToSplit, count, positionToSliceAt, characterToSplitAt, outputArray))
