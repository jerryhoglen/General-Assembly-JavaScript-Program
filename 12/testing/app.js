$(function() {
    // DOM is now ready
    _500px.init({
        sdk_key: '3bed42635c84ec7791dd1621a8afd24e8a832eb1'
    });

    $('#login').hide();

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
                for (var i = 0; i < photos.length; i++) {
                    var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
                    console.log(newImg);
                    $('.images').append(newImg);
                }
            });
        });
    })
    
    var loading = $("#loading-marquee")
    $('#loading-marquee').hide();

    $('#get-pics').on('click', function(event) {
        loading.show();
        event.preventDefault();
      

        var long = $('#longitude').val();
        var lati = $('#latitude').val();

        var yourSearchOptions = {
            geo: long + ',' + lati + ',' + '500mi',
            only: 'Food',
            image_size: 3,
            rpp: 20,
            sort: 'highest_rating'
        };

        _500px.api('/photos/search', yourSearchOptions, function(response) {
                $('.image-results-view').show();

                var photos = response.data.photos;
                for (var i = 0; i < photos.length; i++) {
                    var newImg = $('<img>').attr('src', photos[i].image_url).addClass('images');
                    $('.images').append(newImg);
                };

          });
              loading.hide();
    });
      
});










