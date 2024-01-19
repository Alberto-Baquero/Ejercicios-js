const baseUrl = "https://api.nationalize.io?name=";

const button = document.querySelector("button");
const textInput = document.querySelector("input");

function text() {
  console.log(textInput.value);
  console.log(fetch(baseUrl + textInput.value));
}
button.addEventListener(`click`, text);
