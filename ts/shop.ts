var translateDistance;
var images, focusPos;
var offset = 50;
var imageFocus;
var width, height;

let index = 0;
let x0 = null;
let locked = false;

init();
onWindowResize();
update();

function init(){

    offset = 50

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

    imageFocus = document.getElementsByClassName('imageFocus')[0]

    imageFocus.addEventListener('mousedown', lock, false);
    imageFocus.addEventListener('touchstart', lock, false);

    imageFocus.addEventListener('mouseup', move, false);
    imageFocus.addEventListener('touchend', move, false);

    imageFocus.addEventListener('mousemove', drag, false);
    imageFocus.addEventListener('touchmove', drag, false);

    var is_touch_device = 'ontouchstart' in document.documentElement;
    //redirect to homepage if a touch device
    if(is_touch_device){
        var arrows = document.getElementsByClassName("arrow");
        for(var i=0; i < arrows.length; i++){
            var arrow = arrows[i] as HTMLElement;
            arrow.style.width='15%';
        }
    }

    window.addEventListener( 'resize', onWindowResize.bind(this), false );

    images = document.getElementsByClassName('imgLink');

    focusPos = Array.prototype.indexOf.call(images, images['focus']);

}

function update(){

    images[focusPos].id = 'focus';
    images[focusPos].style.zIndex = '10';

    var translateValue = 100*((images.length/2)-focusPos) - offset;

    if (focusPos == images.length-1){
        const arrowRight = document.getElementById('arrow-right');
        if (arrowRight !== null) {
            arrowRight.style.visibility = 'hidden';
        }
    }
    if (focusPos == 0){
        const arrowLeft = document.getElementById('arrow-left');
        if (arrowLeft !== null) {
            arrowLeft.style.visibility = 'hidden';
        }
    }

    for(var i=0; i<images.length; i++){
        images[i].style.transform = "translateX(" + translateValue + "%) scale(" + 0.8 + ")"
    }

    images[focusPos].style.transform = "translateX(" + translateValue + "%) scale(" + 1 + ")"

    updateText();
    updateWidth();
}

function updateText(){
    var infoText = document.getElementById('info');
    if (infoText !== null) {
        infoText.innerHTML = images[focusPos].firstElementChild.alt;
    }
}

function leftClick(){

    const arrowRight = document.getElementById('arrow-right');
    if (arrowRight !== null) {
        arrowRight.style.visibility = 'visible';
    }

    images[focusPos].id = 'unfocus';
    images[focusPos].style.zIndex = '0';
    focusPos = focusPos - 1;

    update();

}

function rightClick(){

    const arrowLeft = document.getElementById('arrow-left');
    if (arrowLeft !== null) {
        arrowLeft.style.visibility = 'visible';
    }

    images[focusPos].id = 'unfocus';
    images[focusPos].style.zIndex = '0';
    focusPos = focusPos + 1;

    update();


}

function onWindowResize() {

    width = document.getElementsByClassName('imageFocus')[0].clientWidth;
    height = document.getElementsByClassName('imageFocus')[0].clientHeight;

    offset = 50
    update();

}

function updateWidth(){

    var images = document.getElementsByClassName('imgAspect');
    var imageWraps = document.getElementsByClassName('imgLink');

    // make all the images the same width so that the panning behaviour works well
    for(var i=0; i<images.length; i++){
        const imageFocusElement = document.getElementById("imageFocus");
        if (imageFocusElement !== null) {
          (images[i] as HTMLElement).style.maxWidth = "" + imageFocusElement.clientWidth + "px";
        }
    }

    // var arr = Array.prototype.slice.call( imageWraps )
    // var widest = Math.max.apply(Math, arr.map(function(x) { return x.firstElementChild.width; }))

    // for(var i=0; i<imageWraps.length; i++){
    //     imageWraps[i].style.minWidth = "" + widest + "px"
    // }

    // for(var i=0; i<imageWraps.length; i++){
    //     imageWraps[i].style.minWidth = "" + document.getElementById("imageFocus").clientWidth + "px"
    // }

}

///////swiping stuff we hope!///////

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

function lock(e) {
    x0 = unify(e).clientX;
    imageFocus.classList.toggle('smooth', !(locked = true))
};
  
function drag(e) {
    e.preventDefault();
    
    if(locked) {
        let w = window.innerWidth;
        let dx = unify(e).clientX - x0, 
            f = +(dx/w).toFixed(2);
            
        imageFocus.style.setProperty('--i', index - f)
    }
};
  
function move(e) {
    if(locked) {
        let w = window.innerWidth;
        let dx = unify(e).clientX - x0, s = Math.sign(dx), 
            f = +(s*dx/w).toFixed(2);

        if((focusPos > 0 || s < 0) && (focusPos < images.length-1 || s > 0) && f > .2) {
            if(dx<0){
                rightClick()
            }
            if(dx>0){
                leftClick()
            }
            x0 = null
        }
    }
};