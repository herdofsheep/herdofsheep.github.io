$(function() {

var origTitle, animatedTitle, timer;

function animateTitle(newTitle) {
var currentState = false;
origTitle = document.title; // save original title
animatedTitle = "Hey There! " + origTitle;
timer = setInterval(startAnimation, 2000);

function startAnimation() {
// animate between the original and the new title
document.title = currentState ? origTitle : animatedTitle;
currentState = !currentState;
}
}

function restoreTitle() {
clearInterval(timer);
document.title = origTitle; // restore original title
}

// Change page title on blur
$(window).blur(function() {
animateTitle();
});

// Change page title back on focus
$(window).focus(function() {
restoreTitle();
});

});