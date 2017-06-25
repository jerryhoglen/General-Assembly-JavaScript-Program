$(function() {

    var loading = $(".loader")
    $('.loader').hide();


    $('.search').on('click', function(event) {
        loading.show();
        $.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=67821036191f47a1b074fd3e88d9b3da", function(response) {
            loading.hide();

            for (var i = 0; i < response.articles.length; i++) {

                var newImg = $('<img>').
                attr('src', response.articles[i].urlToImage);
                $('.mashable-content').append(newImg);

                var articlesAuthor = response.articles[i].author;
                $('.mashable-content').append("<h5>Author:</h5>" + articlesAuthor + "<br>");

                var articlesDescription = response.articles[i].description;
                $('.mashable-content').append("<h5>Description:</h5>" + articlesDescription + "<br>" + "<hr>");
            };
          });
        });

    $('.search2').on('click', function(event) {
        loading.show();
        $.get("https://newsapi.org/v1/articles?source=buzzfeed&apiKey=67821036191f47a1b074fd3e88d9b3da", function(response) {
            loading.hide();

            for (var i = 0; i < response.articles.length; i++) {

                var newImg2 = $('<img>').
                attr('src', response.articles[i].urlToImage);
                $('.buzzfeed-content').append(newImg2);

                var articlesAuthor2 = response.articles[i].author;
                $('.buzzfeed-content').append("<h5>Author:</h5>" + articlesAuthor2 + "<br>");

                var articlesDescription2 = response.articles[i].description;
                $('.buzzfeed-content').append("<h5>Description:</h5>" + articlesDescription2 + "<br>" + "<hr>");
            };
        });
    });

});
