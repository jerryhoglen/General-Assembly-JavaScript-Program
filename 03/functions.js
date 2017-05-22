function foo() {
	console.log('Hello');
}

foo();
// declare a function called bar with a parameter called name
function bar(name) {
	console.log('Hello '+ name);
}
// call the function named 'bar' with an argument 'Robert' (string)
bar('Jerry');
bar('Bobby');
bar('Peter');
bar('Ricky');

function sum(a, b) {
	console.log(a +b);
}

sum(4, 5);


function yellSomething(something) {
	return 'asdf';
	return something.toUpperCase();
}

var chicken = yellSomething('piglet');
	console.log(chicken);