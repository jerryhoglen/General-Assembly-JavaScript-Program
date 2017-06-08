$(function() {
var container = $('div.container');
var counter = 0;
$('a').click(function(event){
	counter++;
	event.preventDefault();
	$(this).text("You clicked me " + counter + " times");
});
});