function numbersOnly(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function noNumbers(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {
            array.splice(i, 1);
        }
    }
    return array;
}

console.log(numbersOnly([1, "a", 2, "b", true, 3]));
console.log(noNumbers([1, "a", 2, "b", true, 3]));