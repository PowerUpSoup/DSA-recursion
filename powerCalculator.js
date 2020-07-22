const powerCalculator = function(base, total, exponent) {
    if (exponent < 0) {
        console.log ("exponent should be >= 0");
        return null;
    } else if (exponent ===  0) {
        return total;
    }

    return (powerCalculator((base), (total * base), (exponent - 1)))
}

let base = 10;
let total = base;
let exponent = 5;
console.log((base) + " to the power of " + (exponent) + " equals " + (powerCalculator(base, total, exponent)))