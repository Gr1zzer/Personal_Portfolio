// var is the gobal scope, let allows changes, const makes it constant.
// console.log() will print what ever is called or placed in, inside the console.
// you can also change how they are output like an error or warning.
// say if I do "let age = 29", it can change but if it's const no matter what you try it wouldn't change.
// the types of data we have are strings '' "", numbers 1 3, boolean true false, null, undefined.
// null is not 0, zero is a variable and is there, null has a variable but is not there.
// null is object is an error not corrected.
// s.length gets the length of characters
// s.to Upper/LowerCase will upper case or lower case respectfully.
// s.split can split by whatever you choose.
// Arrays hold multiple values at once you can call and sort thru. Also EVERY array is zero based!
// Object literals that are key value pairs.
// = isn't equal, == is equal to. But === equal the data types as well. Probably should use === most the time.
// if has most the time an else statement to catch errors or other data. Else if continue the if statement till a else statement is given.
// >, <, =, <=, >= are all comparasin opperators.
// CONSTRUCTORS ALWAYS HAVE A CAPITAL FIRST!!!
// there are single and multi selector
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const ul = document.querySelector("#users");
myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "please enter the fields.";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    ul.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}
