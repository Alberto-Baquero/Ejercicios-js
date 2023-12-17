let textito = document.createElement("p");
textito.textContent = "Voy en medio!";
let div2 = document.body.querySelector("body>div:nth-child(2)");
document.body.insertBefore(textito, div2);
