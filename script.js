let element = document.createElement('h2');

element.innerHTML = "Yllätys";
element.classList = "hello"

document.getElementById("hello").innerHTML = '<h2 class="hello">Yllätys</h2>';

let element1 = document.querySelector('#hello .hello');
element1.onmouseover = function() {
    document.body.style.backgroundColor = "white";
}

function v1() {
    fetch('https://cataas.com/cat/says/hello%20world!')
        .then(response => response.json())
        .then()
            data => {
            document.getElementById('ei').innerHTML += 
            'img src="' + data.image + '"/>';
            }
}

function v2() {
    document.getElementById("joo").innerHTML = "juu";
}