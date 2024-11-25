// { id: 1, 'recueprar clave: function (){} }
function Usuario () {
    this.id = 1;
    this.recuperarClave = function () { // metodos
        console.log ('Recuperando clave...');
    }
}

let usuario = new Usuario();

console.log(usuario);