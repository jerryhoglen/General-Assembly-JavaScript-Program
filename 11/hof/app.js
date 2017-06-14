var launch = function() {
	console.log("Launched!");
}

var launchTwo = function() {
	console.log("Launched a different rocket");
}

// A higher order function because
// we pass in a function
function rocketLaunch(launchFn) {
	for(var i = 10; i > 0; i--) {
		console.log(i, "...");
	}
	launchFn();
}

rocketLaunch(launchTwo);

setTimeout(launch, 1000);

setTimeout(function() {
	rocketLaunch(launch);
}, 5000);

setInterval(function() {
	rocketLaunch(launch);
}, 1000);

// jQuery might look something like this

function on(eventType, callBackFn) {
	if(eventType == 'click') {
		callBackFn();
	}
}

on('click', function() {
	console.log('you clicked');
})