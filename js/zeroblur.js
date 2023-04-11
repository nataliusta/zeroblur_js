window.onload = init;
function init() {
    let images = document.getElementsByTagName('img');
    for (i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer() {
    let image = document.getElementById('zero');
    image.src = '../zeroblur_js/img/zero.jpg';
}