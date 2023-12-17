const botoncito = document.querySelector("#btnToClick");
function VerBoton(boton) {
  console.log(`click`, boton);
}
botoncito.addEventListener(`click`, VerBoton);
