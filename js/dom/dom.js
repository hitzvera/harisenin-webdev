const divElement = document.getElementsByTagName("div")[0];
const menuElem = document.getElementsByClassName("menu");
const menuElem2 = document.querySelectorAll(".menu");
const btnUbahJudul = document.getElementById("btn_ubah_judul");

btnUbahJudul.addEventListener("click", function () {
  divElement.innerHTML = "judul sudah berubah";
});

function ubahJudul() {
  divElement.innerHTML = "judul akan berubah";
}

menuElem2.forEach(item => console.log(item))
console.log(menuElem2);
