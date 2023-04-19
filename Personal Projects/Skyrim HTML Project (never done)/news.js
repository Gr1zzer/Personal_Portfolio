const myForm = document.querySelector("#my-form");
let news = document.querySelector("#news");
const msg = document.querySelector(".msg");
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (news.value === "") {
    msg.classList.add(".error");
    msg.innerHTML = "please enter the fields.";
    setTimeout(() => msg.remove(), 3000);
  } else {
    alert("Thank you for sharing your adventures!");
    news.value = "";
  }
}
