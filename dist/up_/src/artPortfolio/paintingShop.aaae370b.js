var translateDistance;
var images, focusPos;
var offset = 50;
var imageFocus;
let index = 0;
let x0 = null;
let locked = false;
init();
onWindowResize();
update();
function init() {
    offset = 50;
    document.addEventListener("keydown", function(e) {
        switch(e.key){
            case "ArrowLeft":
                leftClick();
                break;
            case "ArrowRight":
                rightClick();
                break;
        }
    });
    imageFocus = document.getElementsByClassName("imageFocus")[0];
    imageFocus.addEventListener("mousedown", lock, false);
    imageFocus.addEventListener("touchstart", lock, false);
    imageFocus.addEventListener("mouseup", move, false);
    imageFocus.addEventListener("touchend", move, false);
    imageFocus.addEventListener("mousemove", drag, false);
    imageFocus.addEventListener("touchmove", drag, false);
    var is_touch_device = "ontouchstart" in document.documentElement;
    //redirect to homepage if a touch device
    if (is_touch_device) {
        var arrows = document.getElementsByClassName("arrow");
        for(var i = 0; i < arrows.length; i++)arrows[i].style.width = "15%";
    }
    window.addEventListener("resize", onWindowResize.bind(this), false);
    images = document.getElementsByClassName("imgLink");
    focusPos = Array.prototype.indexOf.call(images, images["focus"]);
}
function update() {
    images[focusPos].id = "focus";
    images[focusPos].style.zIndex = "10";
    var translateValue = 100 * (images.length / 2 - focusPos) - offset;
    if (focusPos == images.length - 1) document.getElementById("arrow-right").style.visibility = "hidden";
    if (focusPos == 0) document.getElementById("arrow-left").style.visibility = "hidden";
    for(var i = 0; i < images.length; i++)images[i].style.transform = "translateX(" + translateValue + "%) scale(" + 0.8 + ")";
    images[focusPos].style.transform = "translateX(" + translateValue + "%) scale(" + 1 + ")";
    updateText();
    updateWidth();
}
function updateText() {
    var infoText = document.getElementById("info");
    infoText.innerHTML = images[focusPos].firstElementChild.alt;
}
function leftClick() {
    document.getElementById("arrow-right").style.visibility = "visible";
    images[focusPos].id = "unfocus";
    images[focusPos].style.zIndex = "0";
    focusPos = focusPos - 1;
    update();
}
function rightClick() {
    document.getElementById("arrow-left").style.visibility = "visible";
    images[focusPos].id = "unfocus";
    images[focusPos].style.zIndex = "0";
    focusPos = focusPos + 1;
    update();
}
function onWindowResize() {
    width = document.getElementsByClassName("imageFocus")[0].clientWidth;
    height = document.getElementsByClassName("imageFocus")[0].clientHeight;
    offset = 50;
    update();
}
function updateWidth() {
    var images = document.getElementsByClassName("imgAspect");
    var imageWraps = document.getElementsByClassName("imgLink");
    // make all the images the same width so that the panning behaviour works well
    for(var i = 0; i < images.length; i++)images[i].style.maxWidth = "" + document.getElementById("imageFocus").clientWidth + "px";
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
function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
}
function lock(e) {
    x0 = unify(e).clientX;
    imageFocus.classList.toggle("smooth", (locked = true, false));
}
function drag(e) {
    e.preventDefault();
    if (locked) {
        let w = window.innerWidth;
        let dx = unify(e).clientX - x0, f = +(dx / w).toFixed(2);
        imageFocus.style.setProperty("--i", index - f);
    }
}
function move(e) {
    if (locked) {
        let w = window.innerWidth;
        let dx = unify(e).clientX - x0, s = Math.sign(dx), f = +(s * dx / w).toFixed(2);
        if ((focusPos > 0 || s < 0) && (focusPos < images.length - 1 || s > 0) && f > .2) {
            if (dx < 0) rightClick();
            if (dx > 0) leftClick();
            x0 = null;
        }
    }
}

//# sourceMappingURL=paintingShop.aaae370b.js.map
