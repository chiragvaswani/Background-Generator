var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
console.log(button);

function randomColor() {
  return String(Math.floor(Math.random() * 255));
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  console.log(body.style.background);
  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    " rgb(" +
    randomColor() +
    ", " +
    randomColor() +
    ", " +
    randomColor() +
    "), rgb(" +
    randomColor() +
    ", " +
    randomColor() +
    ", " +
    randomColor() +
    "))";
  console.log(body.style.background);

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
