function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["luckySevenForm"].elements.length; loopCounter++) {
        if (document.forms["luckySevenForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["luckySevenForm"].elements[loopCounter].parentElement.className = "col-md-3";
        }
    }
}

function validateAndPlay() {
    clearErrors();
    var startingBet = document.getElementById("startingBet").value;
    if (startingBet == "" || isNaN(startingBet) || startingBet <= 0) {
        document.forms["luckySevenForm"]["startingBet"].parentElement.className = "col-md-3 has-error";
        alert("Please enter valid number in Starting Bet greater than 0");
        document.forms["luckySevenForm"]["startingBet"].focus();
        return false;
    }
    rollDice(startingBet);
    return false;
}

function rollDice(startingBet) {
    var countRolls = 0;
    var highestAmountWon = 0;
    var rollsForMaxMoney = 0;
    var newBet = startingBet;
    var rollNumber = 0;
    while (newBet > 0.9) {
        countRolls++;
        var dice1 = Math.floor((Math.random() * 6) + 1);
        var dice2 = Math.floor((Math.random() * 6) + 1);

        if (dice1 + dice2 == 7) {
            newBet = newBet + 4;
        } else {
            newBet = newBet - 1;
        }
        if (newBet > highestAmountWon) {
            highestAmountWon = newBet;
            rollsForMaxMoney = countRolls;
        }
        document.getElementById("gameIterations").innerText = document.getElementById("gameIterations").innerText +
            "\n" + ++rollNumber + "-Dice 1 : " + dice1 + ", Dice 2 : " + dice2 + ", Money Remaining : " + Number(newBet);
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("startingBetValue").innerText = startingBet;
    document.getElementById("countRolls").innerText = countRolls;
    document.getElementById("highestAmountWon").innerText = highestAmountWon;
    document.getElementById("rollsForMaxMoney").innerText = rollsForMaxMoney;
}