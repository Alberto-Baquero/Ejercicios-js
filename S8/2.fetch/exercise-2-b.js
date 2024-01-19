const baseUrl = "https://api.nationalize.io?name=";

const button = document.querySelector("button");
const textInput = document.querySelector("input");

function text() {
  console.log(textInput.value);
  fetch(baseUrl + textInput.value)
    .then((resp) => resp.json())
    .then((data) => countries(data));
}

function countries(data) {
  const country1 = data.country[0];
  const country2 = data.country[1];
  const parrafito = document.createElement("p");
  parrafito.innerHTML = `El nombre ${textInput.value} tiene un ${
    country1.probability * 100
  } porciento de ser de ${country1.country_id}  y un ${
    country2.probability * 100
  } porciento de ser de ${country2.country_id}`;
  document.body.appendChild(parrafito);
}

button.addEventListener(`click`, text);
