//Personaje de Marvel

let nombre = "Peter Parker";
let superheroe = "Spiderman";
let edad = 21;

let personaje = {
    nombre: "Peter Parker",
    superheroe: "Spiderman",
    edad: 21,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['superheroe']);

personaje.edad = 13;
personaje['edad'] = 16;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.superheroe;

console.log(personaje);
