const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const juego = streamers.filter((item) => {
  if (item.age > 35 && item.gameMorePlayed.includes("League")) {
    return item;
  }
});
console.log(juego);
