
// For loops

var sum = 0;

for(var i = 0; i < 1000; i++) {
	if(i % 5 == 0 || i % 3 == 0) {
		sum += i;
	}
}

console.log("The sum is: ", sum);


// Functions 
 
 var sum2 = 0;
 var number = 0;
 while(number < 1000) {
 	sum2 += validSum(number);
 	number++;
 }

function isValid(number) {
	if(number % 5 == 0 || number % 3 == 0) {
		return true;
	} else {
		return false;
	} 	
}

function validSum(number) {
	if(isValid(number)) {
		return number;
	} else {
		return 0;
	}
}

console.log("The sum2 is: ", sum2);

// Arrays Fibonacci sequence

var sequence = [ 1, 2 ];
var nextNumber;
var i = 1;
do {
	nextNumber = sequence[i] + sequence[i - 1];
	console.log("Number is:", nextNumber)
	sequence.push(nextNumber);
	i++
} while(nextNumber < 4000000);



