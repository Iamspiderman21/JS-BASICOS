function Punto (x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
  
    this.dibujar = function() 
    {console.log ('Dibujando...');}
}
let punto = {z : 7};
//Punto.call(punto, 1, 2, 3);
Punto.apply(punto, [1, 2, 3]);

console.log(punto);

// const Point = new Function ('x', 'y', `
// this.x = x;
// this.y = y;
// this.dibujar = function() {console.log ('Dibujando...');}
// `);

// const p = new Point (1, 2);
// console.log(p);