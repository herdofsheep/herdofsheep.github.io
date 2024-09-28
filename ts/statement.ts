const sym_img = document.getElementById("symbiote-light");

const off_src = "/assets/images/symbiote/off.png";
const on_src = "/assets/images/symbiote/on.png";

let isOn = false;

// Set an interval to switch the image every second (1000 ms)
setInterval(() => {
  // Toggle the image source based on the current state
  if (isOn) {
    changeImageSrc(sym_img, on_src);
  } else {
    changeImageSrc(sym_img, off_src);
  }
  // Flip the state
  isOn = !isOn;
}, 1000); // 1000 ms = 1 second

function changeImageSrc(sym_img, new_source) {
    if (sym_img) {
        sym_img.src = new_source;
    }
}