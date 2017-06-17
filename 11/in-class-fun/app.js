
// runs the function when the page has loaded
$(function() {
	var loading = $("#loading-marquee")
	$('#loading-marquee').hide();
	// obtain the html element on the page with the ID of 'get-weather'
	// and attach a click event handler
	$('#get-weather').on('click', function(event) {
		loading.show();
		event.preventDefault();

		var long = $('#longitude').val();
		var lati = $('#latitude').val();

		var baseURL = "https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43"
		weatherURL = baseURL + "/" + long + "," + lati

		//use the jquery ($) get method to perform an ajax request
		$.get(weatherURL, function(response) {
		loading.hide();
		var temp = response.currently.temperature;
		var humidity = response.currently.humidity;
		var wind = response.currently.windSpeed;
		$("#current-temp").html(temp);
		$("#current-humidity").html((humidity * 100) + "%");
		$("#current-wind").html(wind);
		});
	});
});