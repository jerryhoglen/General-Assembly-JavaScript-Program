var myJSON =  ' { 
	"address1": "14 kerry ct", 
	"address2": "102 beecher", 
	"city": "milford", 
	"rooms": [ "bedroom", "kitchen", "bathroom" ] } ';

var parsedJSON = JSON.parse(myJSON);
console.log(typeof myJSON);
console.log(typeof parsedJSON);
console.log(parsedJSON);