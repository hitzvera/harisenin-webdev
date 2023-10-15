const username = document.querySelector("#username");
const password = document.querySelector("#password");

const btnLogin = document.querySelector("#btn-login");

import { userData } from "../data/user.js";

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const usernameValue = username.value;
  const passwordValue = password.value;

  const user = userData.find(
    (user) => user.username === usernameValue && user.password === passwordValue
  );

  if (user) {
    window.location.href = "./pages/dashboard.html";
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    alert("Username atau password salah");
  }
});
