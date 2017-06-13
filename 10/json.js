var myJSON = '{ "hello": "world", "foods": [ "pizza", "fries", "burger" ] }';

var parsedJSON = JSON.parse(myJSON);
console.log(typeof myJSON);
console.log(typeof parsedJSON);
console.log(parsedJSON);

console.log(parsedJSON.hello);
console.log(parsedJSON.foods.length);

