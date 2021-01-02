

var translateDistance;
var images, focusPos;

init()

function init(){

    translateDistance = 100;
    translateOffset = 0;

    document.addEventListener('keydown', function(e) {
        switch (e.key) {
            case "ArrowLeft":
                leftClick()
                break;
            case "ArrowRight":
                rightClick()
                break;
        }
    });
    images = document.getElementsByClassName('img');
    focusPos = Array.prototype.indexOf.call(images, images['focus']);

    update();

}

function keyPress(){

}

function update(){
    var translateValue = focusPos*translateDistance-translateOffset;
    var translateBy = -1 * translateValue;

    if (focusPos == images.length-1){
        document.getElementById('arrow-right').style.visibility = 'hidden';
    }
    if (focusPos == 0){
        document.getElementById('arrow-left').style.visibility = 'hidden';
    }

    for(var i=0; i<images.length; i++){
        images[i].style.transform = "translateX(" + translateBy + "%) scale(" + 0.8 + ")"
    }

    images[focusPos].style.transform = "translateX(" + translateBy + "%) scale(" + 1 + ")"

    updateText();
}

function updateText(){
    var infoText = document.getElementById('info');
    infoText.innerHTML = images[focusPos].firstElementChild.alt + " / 32"
}

function leftClick(){

    document.getElementById('arrow-right').style.visibility = 'visible';

    if (focusPos > 0){

        images[focusPos].id = 'unfocus';
        images[focusPos].style.zIndex = '0';
        focusPos = focusPos - 1;
        images[focusPos].id = 'focus';
        images[focusPos].style.zIndex = '10';

        update();
        updateText();

    }

}

function rightClick(){

    document.getElementById('arrow-left').style.visibility = 'visible';

    if (focusPos < images.length-1){

        images[focusPos].id = 'unfocus';
        images[focusPos].style.zIndex = '0';
        focusPos = focusPos + 1;
        images[focusPos].id = 'focus';
        images[focusPos].style.zIndex = '10';

        update();
        updateText();

    }

}

