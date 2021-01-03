

var translateDistance;
var images, focusPos;
var selection, contentOptions;
var links;

init()

function init(){

    contentOptions = document.getElementsByClassName('contentOption');
    selection = Array.prototype.indexOf.call(contentOptions, contentOptions['default']);

    links = document.getElementsByClassName('artItem');

    for(var i=0; i<links.length; i++){
        links[i].addEventListener('click',linkClick);
    }

    update();

}


function update(){

}

function updateText(){
    var infoText = document.getElementById('info');
    infoText.innerHTML = images[focusPos].firstElementChild.alt + " / 32"
}

function linkClick(e){
    var link = e.target.id;

    for(var i=0; i<contentOptions.length; i++){
        contentOptions[i].style.visibility = 'hidden'
    }

    if(contentOptions[link] != undefined){
        contentOptions[link].style.visibility = 'visible'
    }
    else{
        console.log("haven't made content for this link yet")
    }
}

