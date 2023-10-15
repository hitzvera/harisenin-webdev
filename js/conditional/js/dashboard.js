function getDataUser() {
  // getting data user from localstorage
  const userData = JSON.parse(localStorage.getItem("user"));

  // getting DOM element
  const usernameElement = document.querySelector("#username");
  const imageElement = document.querySelector("#profile-image");

  // displaying the data into the DOM element
  if (userData) {
    usernameElement.textContent = userData.username;
    imageElement.src = userData.imgUrl;
  } else {
    usernameElement.textContent = "Guest";
    imageElement.src = "https://via.placeholder.com/150";
  }
}

function onLogout() {
  localStorage.removeItem("user");
  window.location.href = "../index.html";
}

function addTask() {
  const taskNameElm = document.querySelector("#taskName");
  const task = document.querySelector("#taskName");
  const taskList = document.querySelector("#task-list");
}

function displayData() {
  const userData = JSON.parse(localStorage.getItem("user"));
}

getDataUser();
