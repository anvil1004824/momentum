const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASS_HIDDEN = "hidden";

function Submit(event) {
  event.preventDefault();
  loginForm.classList.add(CLASS_HIDDEN);
  localStorage.setItem("username", loginInput.value);
  Greeting();
}

function Greeting() {
  const username = localStorage.getItem("username");
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(CLASS_HIDDEN);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(CLASS_HIDDEN);
  loginForm.addEventListener("submit", Submit);
} else {
  Greeting();
}
