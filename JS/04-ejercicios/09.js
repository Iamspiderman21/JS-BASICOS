//Crea algoritmo que devuelva in array
// de objectos en base a pares
let pairs = [
    [1, { name: 'Alan'}],
    [2, { name: 'Maria'}],
    [3, { name: 'Erick'}],
];

let array = [{
    id: 1,
    name: 'Alan',
}, {
    id: 2,
    name: 'Maria',
}, {
    id: 3,
    name: 'Erick',
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];

    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);