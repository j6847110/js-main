const main = document.querySelector("main");
const image = document.querySelector(".bgImage");
main.style.opacity = 0;

function mainDisplay() {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}
function final() {
  const input = document.querySelector(".js-toDoForm input");
  if (window.innerWidth < 550) {
    input.style.width = "70%";
  } else {
    input.style.width = "500px";
  }

  main.classList.add("main_fadeIn");
}
function handleInputWidth(){
  const input = document.querySelector(".js-toDoForm input");
  if (window.innerWidth < 550) {
    input.style.width = "70%";
  } else {
    input.style.width = "500px";
  }

}
image.addEventListener("animationend", final);
window.addEventListener("resize",handleInputWidth)