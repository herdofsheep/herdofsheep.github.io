

var translateDistance;
var images, focusPos;

init()

function init(){

    translateDistance = 100;
    translateOffset = 4;

    images = document.getElementsByClassName('img');
    focusPos = Array.prototype.indexOf.call(images, images['focus']);

    positionImages();

}

function positionImages(){
    var translateValue = focusPos*translateDistance-translateOffset;
    var translateBy = -1 * translateValue;

    for(var i=0; i<images.length; i++){
        images[i].style.transform = "translateX(" + translateBy + "%) scale(" + 0.8 + ")"
    }
}

function leftClick(){

    document.getElementById('arrow-right').style.visibility = 'visible';
    if (focusPos == 1){
        document.getElementById('arrow-left').style.visibility = 'hidden';
    }

    if (focusPos > 0){

        images[focusPos].id = 'unfocus';
        images[focusPos].style.zIndex = '0';
        focusPos = focusPos - 1;
        images[focusPos].id = 'focus';
        images[focusPos].style.zIndex = '10';

        positionImages();

    }

}

function rightClick(){

    document.getElementById('arrow-left').style.visibility = 'visible';
    if (focusPos == images.length-2){
        document.getElementById('arrow-right').style.visibility = 'hidden';
    }

    if (focusPos < images.length-1){

        images[focusPos].id = 'unfocus';
        images[focusPos].style.zIndex = '0';
        focusPos = focusPos + 1;
        images[focusPos].id = 'focus';
        images[focusPos].style.zIndex = '10';

        positionImages();

    }

}

