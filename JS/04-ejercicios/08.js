// Crea algoritmo que tome un array de
// objetos y devuelvem un array de pares

let array = [{
    id: 1,
    name: 'Alan',
}, {
    id :2,
    name: 'Maria',
}, {
    id: 3,
    name: 'Erick',
}];

let pares = [
    [1, { id: 1, name: 'Alan'}],
    [2, { id: 2, name: 'Maria'}],
    [3, { id: 3, name: 'Erick'}],

];
function toPairs(arr){
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs [idx] = [elemento.id, elemento];
    }
    return pairs;
}
let resultado = toPairs(array);
console.log(resultado);
