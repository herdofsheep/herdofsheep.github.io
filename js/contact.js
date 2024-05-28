
var email = document.getElementById("emailCopy");
email.addEventListener("click", emailClipboard);
email.addEventListener("focusout", tooltipReset);
email.addEventListener("mouseout", tooltipReset);

emailText = document.getElementById("email")
emailText.value = emailText.innerText;

window.addEventListener("DOMContentLoaded", function() {
        
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        } else {
        error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

function emailClipboard(){

    var range = document.createRange();
    range.selectNode(document.getElementById("email"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    var bubble = document.getElementById("bubbleContents")
    bubble.innerHTML = "copied to clipboard";
    /* Alert the copied text */
    // alert("Copied to clipboard " + emailText.value);
}

async function tooltipReset(){
    const text = await navigator.clipboard.readText();
    var bubble = document.getElementById("bubbleContents")
    if(text==emailText.value){
        bubble.innerHTML = "copied to clipboard";
    }
    else{
        bubble.innerHTML = "click to copy to clipboard"
    }
}