var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
console.log(button);

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  console.log(body.style.background);
  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    String(Math.floor(Math.random() * 255)) +
    ", " +
    String(Math.floor(Math.random() * 255)) +
    ")";
  console.log(body.style.background);

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
