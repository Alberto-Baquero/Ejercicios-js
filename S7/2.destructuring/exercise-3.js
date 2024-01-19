const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();
console.log("name:", name);
console.log("race:", race);
