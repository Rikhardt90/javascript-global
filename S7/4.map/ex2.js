// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el
// nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userName = users.map((person) => {
  if (person.name[0] === "A") {
    return "Anacleto";
  } else {
    return person.name;
  }
});

console.log(userName);
