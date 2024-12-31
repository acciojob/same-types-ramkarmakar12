function isSameType(value1, value2) {
    // Check if the types of the values are the same
    return typeof value1 === typeof value2;
}

// do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert the input to numbers if they can be parsed as numbers
value1 = isNaN(Number(value1)) ? value1 : Number(value1);
value2 = isNaN(Number(value2)) ? value2 : Number(value2);

// Check and alert the result
alert(isSameType(value1, value2));
