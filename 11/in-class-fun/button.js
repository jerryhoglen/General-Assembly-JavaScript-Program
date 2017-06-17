$(function() {
    $('#countdown-btn').css("margin-top", "25%");

    $('#countdown-btn').on('click', function() {
        var randNum = Math.ceil(Math.random() * 100);

        countdown(randNum);
        var myVar;

        function countdown(val) {
            var counter = val;

            myVar = setInterval(function() {
                if (counter >= 0) {
                    document.getElementById("timer").innerHTML = counter;
                }
                if (counter < 0) {
                    $('#randomcat').append('<img src="https://uploads.scratch.mit.edu/users/avatars/1385/1878.png" height="500px" width="500px">');
                }

                counter--;
            }, 1000)

        }

    })
});
