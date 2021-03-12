var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
console.log(button);

function randomColor() {
  return String(Math.floor(Math.random() * 255));
}

function setGradient(
  _, // _ is used to store the first parameter which is the event.
  left = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
  right = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
) {
  console.log(left);
  body.style.background = `linear-gradient(to right, ${left}, ${right})`;

  console.log(body.style.background);
  css.textContent = body.style.background + ";";
}

// function setRandomGradient() {
//   body.style.background = `linear-gradient(to right, rgb(${randomColor()}, ${randomColor()}, ${randomColor()}), rgb(${randomColor()}, ${randomColor()}, ${randomColor()}))`;
//   console.log(body.style.background);

//   css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

button.addEventListener("click", setGradient);
