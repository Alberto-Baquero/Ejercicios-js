const Undiv = document.createElement("div");

const UndivConP = document.createComment("p");

document.body.appendChild(Undiv);

Undiv.appendChild(UndivConP);

console.log(Undiv);
