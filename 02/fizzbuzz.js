
for(var i = 0; i < 100; i++) {
	//console.log("Your number: " + number++);
	if (i % 15 == 0) {
		console.log('fizzbuzz');
	} else if(i % 5 == 0) {
		console.log('buzz');
	} else if(i % 3 == 0){
		console.log('fizz');
	}else {
		console.log(i);
	}
};
