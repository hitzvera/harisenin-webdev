const usernameElement = document.querySelector("#username");
const imageElement = document.querySelector("#profile-image");

const storedUsername = localStorage.getItem("username");
const storedImageSrc = localStorage.getItem("imageUrl");

if (storedUsername && storedImageSrc) {
  usernameElement.textContent = storedUsername;
  imageElement.src = storedImageSrc;
}
