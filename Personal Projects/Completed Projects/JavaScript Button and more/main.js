/*
This project needs a way to take the click counter and increment it up to the next number.
It is also gonna need a way to change the style of the background with a RGB system.
I also need to create a default for the styles and where everything will be.
*/

let output = document.getElementById("colorOutput");

output.innerText(
  "rgb(" + red.value + "," + green.value + "," + blue.value + ")"
);

function onColors() {
  let red = document.getElementById("range_red").value;
  let green = document.getElementById("range_green").value;
  let blue = document.getElementById("range_blue").value;
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}

function btnPressed() {
  clicks.innerHTML++;
}
