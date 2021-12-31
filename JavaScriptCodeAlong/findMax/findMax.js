function findMax(arrayOfElements) {
    var max = arrayOfElements[0];
    for (var i = 1; i < arrayOfElements.length; i++) {
        if (arrayOfElements[i] > max) {
            max = arrayOfElements[i];
        }
    }
    return max;
}