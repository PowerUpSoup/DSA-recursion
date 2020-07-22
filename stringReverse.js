function stringReverse(stringToReverse, reverseString, count){
    if (count === -1) {
        return reverseString;
    }
    let letter = stringToReverse.charAt(count)
    return stringReverse(stringToReverse, (reverseString.concat(letter)), (count - 1) )   
}

let stringToReverse = ".yad taerg a evaH .taerg yllaer era uoY";
let reverseString = "";
let count = stringToReverse.length;
console.log(stringReverse(stringToReverse, reverseString, count))