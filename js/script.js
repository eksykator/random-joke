var url = 'http://api.icndb.com/jokes/random';

var drawButton = document.getElementById('draw-button');
drawButton.addEventListener('click', function() {
    drawJoke();
});

var divJoke = document.getElementById('joke');

function drawJoke() {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function() {
        var response = JSON.parse(request.response);
        divJoke.innerHTML = response.value.joke;
    })
    request.send();
};

drawJoke();




