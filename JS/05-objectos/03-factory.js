
function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Alan', 'alanagugo@gmail.com');
let user2 = crearUsuario('Alonso', 'moralesalonso@gmail.com');

console.log(user1, user2);