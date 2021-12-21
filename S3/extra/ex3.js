// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('div');
const ulCars$$ = document.createElement('ul');

for (const car of cars) {
    const liCars$$ = document.createElement('li');
    liCars$$.textContent = car;
    ulCars$$.appendChild(liCars$$);
}

div$$.appendChild(ulCars$$);

