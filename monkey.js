var Monkey = function(name, species, foodsEaten) {
	this.name = name;
	this.species = species;
	this.foodsEaten = foodsEaten;
}

Monkey.prototype.eatSomething = function(food) {
	console.log(this.name + " has enjoyed a " + food);
}

Monkey.prototype.introduce = function() {
	console.log(this.name + " has eaten " + this.foodsEaten);
}

var monkey1 = new Monkey("George", "Curious", "Lasagna");

monkey1.eatSomething('bananas')
monkey1.introduce();