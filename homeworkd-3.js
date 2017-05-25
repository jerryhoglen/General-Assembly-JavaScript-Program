// Given an array with these elements in it:
var numberList = [1, 5, 2, 20, 7, 90, 3];
var largestNumber = 0;



// Write a function that returns the largest element in an array.
function whatNumber() {
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] > largestNumber) {
            largestNumber = numberList[i];
        }
    }
    console.log(largestNumber)
}
whatNumber();



// Write a function that checks whether an element occurs in an array. Make the function return true or false. For example:
function inArray(myList, numberToFind) {
    for (var i = 0; i < myList.length; i++) {
        if (myList[i] === numberToFind) {
            return true;
        }
    }
    return false;
}
var array = [1, 3, 5, 6];
console.log(inArray(array, 5));


// Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90

function oddArrayIndex(arrayName, emptyIndex) {
    for (var i = 1; i < arrayName.length; i += 2) {
        emptyIndex.push(arrayName[i]);
    }
    console.log(emptyIndex);
}
var arr = [1, 2, 3, 4, 5, 6, 7];
var oddIndex = [];
oddArrayIndex(arr, oddIndex);


// Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)

function add(a, b) {
    return a + b;
}

var sum = [3, 6, 9, 12].reduce(add, 0);

console.log(sum);

// Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.
function amIaPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}
console.log(amIaPalindrome("madam"));
console.log(amIaPalindrome("first"));
console.log(amIaPalindrome("rotator"));

// You can do all of these in 1 javascript file.
