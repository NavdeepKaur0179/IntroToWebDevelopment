function rollingDice() {
    return Math.floor((Math.random() * 6) + 1)

}

// for (var i = 0; i < 100; i++) {
//     console.log(rollingDice());
// }

function rollingDice(numSides) {
    return Math.floor((Math.random() * numSides) + 1)

}

for (var i = 0; i < 10; i++) {
    console.log(rollingDice(4));
}