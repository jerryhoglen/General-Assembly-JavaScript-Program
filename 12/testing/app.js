$(function() {
    // DOM is now ready
    _500px.init({
        sdk_key: '3bed42635c84ec7791dd1621a8afd24e8a832eb1'
    });

    $('#login').click(function() {
        _500px.login();
    });

    _500px.on('authorization_obtained', function() {
        console.log("Authorized Successfully!");
        $('#login').hide();

        navigator.geolocation.getCurrentPosition(function(pos) {
          
          var lat = pos.coords.latitude;
          var long = pos.coords.longitude;

          var searchOptions = {
          	geo: lat + ',' + long + ',' + '25mi',
          	only: 'Landscapes',
          	image_size: 3,
          	rpp: 28,
          	sort: 'highest_rating'
          };

          console.log(searchOptions);

          _500px.api('/photos/search', searchOptions, function(resp) {
          	$('.image-results-view').show();
          	
          	var photos = resp.data.photos;
          	for(var i = 0; i < photos.length; i++) {
          		var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
          		console.log(newImg);
          		$('.images').append(newImg);
          	}
          });
        });
    })
});
