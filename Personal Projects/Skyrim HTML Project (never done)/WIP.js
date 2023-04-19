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
