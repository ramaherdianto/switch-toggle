const nama = prompt("Siapa nama kamu?");
const ucapan = document.querySelector("p");

ucapan.innerHTML = `Good Night ${nama} ❤️`;

document.getElementById("toggle").addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
  document.getElementsByTagName("p")[0].classList.toggle("active");
});
