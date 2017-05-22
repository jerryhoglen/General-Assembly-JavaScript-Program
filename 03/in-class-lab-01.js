/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */
var q1 = ['image1.png', 'image2.png', 'image3.png' ];
// Your code here


/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */
var q2 = q1[0];
// Your code here


/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */
var q3 = q1.length;
// Your code here


/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */
var lastIndex = q3 - 1;
var q4 = q1[lastIndex];

// Your code here
console.log('q4: ', q4);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */
var numbers = [1, 2, 3, 4 ];

console.log('numbers: ', numbers);

for(var i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i] + 1;
}

// Your code here




/**
 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 *///var q2 = 


// Your code here

var sum = 0;
for(var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

var average = (sum / numbers.length);
console.log("Average is", average);







