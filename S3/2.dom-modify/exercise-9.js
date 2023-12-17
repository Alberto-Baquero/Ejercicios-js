const TextoDentro = document.querySelectorAll(".fn-insert-here");

TextoDentro.forEach(function (EsUnaPe) {
  const LaPe = document.createElement("p");

  LaPe.textContent = "Voy dentro!";
  EsUnaPe.appendChild(LaPe);
});
