const userAnwsers = [];

function confirmExample(description) {
  return confirm(description);
}

function promptExample(description) {
  return prompt(description);
}

function father(description, callback) {
  const result = callback(description);
  userAnwsers.push(result);
}

father("¿Quieres continuar?", confirmExample);
father("Ingresa tu nombre:", promptExample);
father("¿Estás seguro?", confirmExample);

console.log(userAnwsers);
