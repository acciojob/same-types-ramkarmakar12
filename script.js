function isSameType(value1, value2) {
    // Check the type of value1 and value2
    return typeof value1 === typeof value2;
}

// do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert input to numbers if valid, otherwise leave as is
if (!isNaN(value1) && value1.trim() !== "") value1 = Number(value1);
if (!isNaN(value2) && value2.trim() !== "") value2 = Number(value2);

alert(isSameType(value1, value2));
