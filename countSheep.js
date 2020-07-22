const sheepCount = function(sheep, count) {
    // Base case
    if (sheep === 0) {
        console.log ("All sheep jumped over the fence.")
        return count;
    }
    // General case
    console.log("A sheep jumped over the fence. That makes " + (count +1) + " sheep.")
    return sheepCount((sheep - 1), (count + 1));
}

let sheep = 10;
let count = 0;
console.log(sheepCount(sheep, count));