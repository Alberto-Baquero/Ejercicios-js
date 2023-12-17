const InText = document.querySelector("input");

function barra(TextoBarra) {
  console.log(TextoBarra.target.value);
}
InText.addEventListener(`input`, barra);

console.log(barra);
