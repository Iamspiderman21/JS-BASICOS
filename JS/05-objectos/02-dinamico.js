const user = {id: 1};

user.name = 'Alan';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1  = Object.freeze({id: 1});
const user1  = Object.seal({id: 1});
user1.name = 'Alan';
user1.id = 2;
conosle.log (user1);