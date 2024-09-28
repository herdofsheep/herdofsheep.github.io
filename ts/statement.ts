let isOn = false;

// Set an interval to switch the image every second (1000 ms)
setInterval(() => {
  // Toggle the image source based on the current state
  const sym_off = document.getElementById("symbiote-off");
  const sym_on = document.getElementById("symbiote-on");
  if (sym_off && sym_on){
    if (isOn) {
      sym_on.style.visibility = "visible";
      sym_off.style.visibility = "hidden";
    } else {
      sym_off.style.visibility = "visible";
      sym_on.style.visibility = "hidden";
    }
  }
  else {
    console.error("One or both of the images are missing.");
  }
  // Flip the state
  isOn = !isOn;
}, 1000); // 1000 ms = 1 second
