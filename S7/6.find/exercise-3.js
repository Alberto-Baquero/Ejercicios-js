const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const alienFinded = aliens.find((alien) => alien.name === "Cucushumushu");

if (alienFinded) {
  const mutationFinded = mutations.find(
    (mutacion) => mutacion.name === "Porompompero"
  );
  if (mutationFinded) {
    alienFinded.mutation = mutationFinded;
    console.log(
      `El alien '${alienFinded.name}' con la mutación '${mutationFinded.name}'se ha encontrado con exito.`
    );
    console.log("Alien actualizado:", alienFinded);
  } else {
    console.log('La mutación "Porompompero" no ha sido posible encontrarla.');
  }
} else {
  console.log('El alien "Cucushumushu" no ha sido posible encontrarlo.');
}
