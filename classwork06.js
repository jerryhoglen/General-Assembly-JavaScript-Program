var dog = { breed: "Schnauzer", name: "Maggie", color: "Black" };

var dog1 = { breed: "Poodle", name: "Ollie", color: "White" };

var dog2 = { breed: "Beagle", name: "Dude", color: "Grey" };

console.log(dog, dog1, dog2);

function typeOfDog(dog) {
	console.log("the dogs name is " + dog.name);
}

typeOfDog(dog2);


var Person = function(aName, age) {
	this.name = aName;
	this.age = age;
}

Person.prototype.canDrive = function() {
	if(this.age >= 16) {
		return true;
	} else {
		return false;
	}
};

var robert = new Person("Robert", 16);

console.log("The person is: ", robert.name)
console.log("The person's age is: ", robert.age)

console.log("Can they drive?", robert.canDrive());

