const alien = {
    name: "Wormuck",
    race: "Cucusumusu",
    planet: "Eden",
    weight: "259kg",
  };

for (const alienigena in alien) {
  if (alien.hasOwnProperty.call(alien, alienigena)) {
    const bichillo = alien[alienigena];
    console.log(alienigena, bichillo);
    }
}