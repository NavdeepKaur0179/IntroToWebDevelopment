function countingCharacters(stringToCount) {
    console.log("The String " + stringToCount + "has " + stringToCount.length + " Characters");
}

function countingCharacters2(stringToCount, characterToFind) {
    var countCharacterToFind = 0;
    for (var i = 0; i < stringToCount.length; i++) {
        if (stringToCount[i] == characterToFind) {
            countCharacterToFind = countCharacterToFind + 1;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " +
        countCharacterToFind);
}


function countingCharacters3(str, search) {
    var count = 0;
    var numCharToSerch = search.length;
    var lastIndex = str.length - numCharToSerch;

    for (var index = 0; index <= lastIndex; index++) {
        var currentSubString = str.substring(index, index + numCharToSerch);
        if (currentSubString == search) {
            count++;
        }
    }
    // console.log("String to search in: " + str);
    // console.log("Character to find: " + search);
    // console.log("Number of times the character appears: " + count);

    return count;
}