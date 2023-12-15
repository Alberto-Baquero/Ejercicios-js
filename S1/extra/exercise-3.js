const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225},
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214},
    {name: "El jardin de las palabras", durationInMinutes: 40}];

    // arrays de la peliculas a pushear.

const peliculaPequeña =[]

const peliculaMediana =[]

const peliculaGrande =[]

for (const pelip of movies) {
    if (pelip.durationInMinutes <= 100) {
        peliculaPequeña.push(pelip)
    }
}
console.log("pelicula pequeña", peliculaPequeña);

for (const pelim of movies) {
    if (pelim.durationInMinutes >= 100 && pelim.durationInMinutes <= 200) {
        peliculaMediana.push(pelim)
    }
}
console.log("pelicula mediana", peliculaMediana);

for (const pelig of movies) {
    if (pelig.durationInMinutes >=200) {
        peliculaGrande.push(pelig)
    }
}
console.log("pelicula grande", peliculaGrande);