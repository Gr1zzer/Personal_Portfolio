let fNumber_input = document.querySelector("#firstNumber");
let equation_input = document.querySelector("#opperation");
let sNumber_input = document.querySelector("#secondNumber");
let ul = document.querySelector("#users");
let result_input = document.querySelector("#result");
myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  alert("got here");
  li = document.createElement("li");
  if (fNumber_input === "" || equation_input === "" || sNumber_input === "") {
    alert("please try again");
    fNumber_input.value = "";
    sNumber_input.value = "";
    equation_input.value = "";
  } else if (equation_input === "+") {
    li.appendChild(
      document.createTextNode(
        `${fNumber_input.value} + ${sNumber_input.value} = ${
          fNumber_input.value + sNumber_input.value
        }`
      )
    );
    ul.appendChild(li);
    fNumber_input.value = "";
    sNumber_input.value = "";
    equation_input.value = "";
  } else if (equation_input === "-") {
    li.appendChild(
      document.createTextNode(
        `${fNumber_input.value} - ${sNumber_input.value} = ${
          fNumber_input.value - sNumber_input.value
        }`
      )
    );
    ul.appendChild(li);
    fNumber_input.value = "";
    sNumber_input.value = "";
    equation_input.value = "";
  } else if (equation_input === "/") {
    li.appendChild(
      document.createTextNode(
        `${fNumber_input.value} / ${sNumber_input.value} = ${
          fNumber_input.value / sNumber_input.value
        }`
      )
    );
    ul.appendChild(li);
    fNumber_input.value = "";
    sNumber_input.value = "";
    equation_input.value = "";
  } else if (equation_input === "*") {
    li.appendChild(
      document.createTextNode(
        `${fNumber_input.value} * ${sNumber_input.value} = ${
          fNumber_input.value * sNumber_input.value
        }`
      )
    );
    ul.appendChild(li);
    fNumber_input.value = "";
    sNumber_input.value = "";
    equation_input.value = "";
  } else {
    alert("what happened");
  }
  return false;
}
