var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState === 4) {
    var parsedJSON = JSON.parse(request.responseText);

    var elem = document.getElementById('body');
    elem.innerHTML = "Your current temperarture is " + parsedJSON.currently.temperature;
  }
}

request.open('GET', 'https://js58-proxy.herokuapp.com/forecast/5d570fb5746ea8eb96c51641993aa083/29.9792, 31.1342');
request.send();