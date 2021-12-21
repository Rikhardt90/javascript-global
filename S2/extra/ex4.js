// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:

//function findArrayIndex(array, text) {}

//Ej array:

//['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const bichos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    const bicho = bichos[i];

    if (bicho === text) {
      return i;
    }

  }

}

const prueba = findArrayIndex(["Caracol", "Mosquito", "Salamandra", "Ajolote"], "Ajolote");

console.log(" posición ", prueba)
