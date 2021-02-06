

var translateDistance;
var images, focusPos;
var selection, contentOptions;
var links;

var scrollMin, scrollMax;

var scrollDiv

init()

function init(){

    scrollDiv = document.getElementById('artMain')
    scrollDiv.scrollLeft = 0;
    scrollDiv.addEventListener("scroll", handleScroll)
    document.getElementById('scroller').addEventListener("input", sliderClick)


    contentOptions = document.getElementsByClassName('contentOption');
    selection = Array.prototype.indexOf.call(contentOptions, contentOptions['default']);

    links = document.getElementsByClassName('artItem');

    for(var i=0; i<links.length; i++){
        links[i].addEventListener('click',linkClick);
    }

    scrollMin = document.getElementById('scroller').firstElementChild.getAttribute('min')
    scrollMax = document.getElementById('scroller').firstElementChild.getAttribute('max')

}

function handleScroll(){
    var scrollPos = document.getElementById('artMain').scrollLeft;
    var width = document.getElementById('artMain').scrollWidth - document.getElementById('artMain').clientWidth;

    var value = scrollPos*scrollMax/width;

    document.getElementById('scroller').firstElementChild.setAttribute('value',value)
    document.getElementById('scroller').firstElementChild.value = value
}

function sliderClick(e){
    var value = e.srcElement.value
    var width = document.getElementById('artMain').scrollWidth - document.getElementById('artMain').clientWidth;
    
    scrollDiv.scrollLeft = value*width/scrollMax
}

function updateText(){
    var infoText = document.getElementById('info');
    infoText.innerHTML = images[focusPos].firstElementChild.alt + " / 32"
}

function linkClick(e){
    var link = e.target.id;

    focusItems = document.getElementsByClassName('focus')

    if(focusItems.length > 0){
        for (var i=0; i<focusItems.length; i++){
                focusItems[i].classList.remove('focus')
        }
    }

    e.target.classList.add('focus');

    document.getElementById('artMain').scrollLeft = 0;

    for(var i=0; i<contentOptions.length; i++){
        contentOptions[i].style.visibility = 'hidden'
    }

    if(contentOptions[link] != undefined){
        contentOptions[link].style.visibility = 'visible'
    }
    else{
        // alert("haven't made content for this link yet")
    }
}

