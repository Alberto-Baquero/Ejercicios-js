const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const listaDeCiudades = cities.map((city) => {
  if (city.isVisited === true) {
    return city.name + " Visited";
  } else {
    return city.name;
  }
});
console.log(listaDeCiudades);
