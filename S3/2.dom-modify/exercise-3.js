const Undiv = document.createElement("div");

document.body.appendChild(Undiv);

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  Undiv.appendChild(p);
}
