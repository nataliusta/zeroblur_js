window.onload = init;
function init() {
    let images = document.getElementsByTagName('img');
    for (i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + '.jpg';
    image.src = '../zeroblur_js/img/' + name;
}

function reblur(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = '../zeroblur_js/img/' + name + 'blur.jpg';
    image.src = name;
}