$(function() {

    var loading = $(".loader")
    $('.loader').hide();
    $('#read-more').hide();


    $('.search').on('click', function(event) {
        loading.show();
        $('.empty-previous').empty();
        $('.empty-btn').empty();
        $('.button-2').append('<a href="https://www.techcrunch.com">Read More From Source</a>')
        $.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=dfc0f7e0fedb4bc195cd9f04ff06c5b5", function(response) {
            loading.hide();
            $('#read-more').show();

            for (var i = 0; i < response.articles.length; i++) {

                var newImg = $('<img>').
                attr('src', response.articles[i].urlToImage);
                $('.techcrunch-content').append(newImg);

                var articlesAuthor = response.articles[i].author;
                $('.techcrunch-content').append("<h5>Author:</h5>" + articlesAuthor + "<br>");

                var articlesDescription = response.articles[i].description;
                $('.techcrunch-content').append("<h5>Description:</h5>" + articlesDescription + "<br>");

                var articlesUrl = response.articles[i].url;
                $('.techcrunch-content').append("<h5>Full Article:</h5>" + articlesUrl + "<br>" + "<hr>");
            };
        });
    });

    $('.search2').on('click', function(event) {
        loading.show();
        $('.empty-previous').empty();
        $('.empty-btn').empty();
        $('.button-2').append('<a href="https://www.buzzfeed.com">Read More From Source</a>')
        $.get("https://newsapi.org/v1/articles?source=buzzfeed&apiKey=dfc0f7e0fedb4bc195cd9f04ff06c5b5", function(response) {
            loading.hide();
            $('#read-more').show();

            for (var i = 0; i < response.articles.length; i++) {

                var newImg2 = $('<img>').
                attr('src', response.articles[i].urlToImage);
                $('.buzzfeed-content').append(newImg2);

                var articlesAuthor2 = response.articles[i].author;
                $('.buzzfeed-content').append("<h5>Author:</h5>" + articlesAuthor2 + "<br>");

                var articlesDescription2 = response.articles[i].description;
                $('.buzzfeed-content').append("<h5>Description:</h5>" + articlesDescription2 + "<br>" + "<hr>");

                var articlesUrl2 = response.articles[i].url;
                $('.buzzfeed-content').append("<h5>Full Article:</h5>" + articlesUrl2 + "<br>" + "<hr>");
            };
        });
    });

        $('.search3').on('click', function(event) {
        loading.show();
        $('.empty-previous').empty();
        $('.empty-btn').empty();
        $('.button-2').append('<a href="https://www.hackernews.com">Read More From Source</a>')
        $.get("https://newsapi.org/v1/articles?source=hacker-news&apiKey=dfc0f7e0fedb4bc195cd9f04ff06c5b5", function(response) {
            loading.hide();
            $('#read-more').show();

            for (var i = 0; i < response.articles.length; i++) {

                var newImg3 = $('<img>').
                attr('src', response.articles[i].urlToImage);
                $('.hacker-content').append(newImg3);

                var articlesAuthor3 = response.articles[i].author;
                $('.hacker-content').append("<h5>Author:</h5>" + articlesAuthor3 + "<br>");

                var articlesDescription3 = response.articles[i].description;
                $('.hacker-content').append("<h5>Description:</h5>" + articlesDescription3 + "<br>" + "<hr>");

                var articlesUrl3 = response.articles[i].url;
                $('.hacker-content').append("<h5>Full Article:</h5>" + articlesUrl3 + "<br>" + "<hr>");
            };
        });
    });

});
