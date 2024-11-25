let user = {
    id: 1,
    name: 'Cabllo',
    age: 25,
};

for (let prop in user ) {
    console.log(prop, user[prop]);
}

let animales = ['Cabllo', 'Conejo', 'Burro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}