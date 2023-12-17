const InText = document.querySelector("input");

function barra(TextoBarra) {
  console.log(TextoBarra.target.value);
}
InText.addEventListener(`focus`, barra);

console.log(barra);
