var listaDeCompra = [];
listaDeCompra [3] = "Tomate";
listaDeCompra [1] = "Lechuga"
console.log (listaDeCompra);
console.log (listaDeCompra.length);


var elementoDelArray = listaDeCompra [1];
console.log (elementoDelArray);

// Clase 2 de arreglos

var colores = ["amarillo", "azul"];
colores.push ("Rojo");
console.log (colores);

colores.unshift ("verde");
console.log (colores);

colores.pop ();
console.log (colores);

colores.shift ();
console.log (colores);

var pintores =["Picaso", "Velazques", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes ("Dali");
console.log (incluyeDali);

var incluyeMonet =pintores.includes ("Monet");
console.log (incluyeMonet);

var numeros = [1, 6, 8, 9];
var cumpleCondicion = numeros.every ((num) =>{
return num >5;
})
console.log (cumpleCondicion);


var numeros2 = [10, 6, 8, 9];
var cumpleCondicion2 = numeros2.every ((num) =>{
return num >5;
})
console.log (cumpleCondicion2);

var palabra = "Henri";
var palabraSeparada = palabra.split ("");
console.log (palabraSeparada);

palabraSeparada.pop ();
palabraSeparada.push ("y");
console.log (palabraSeparada);

var palabraArreglada = palabraSeparada.join ("");
console.log (palabraArreglada);

var numeros3 = [1, 2, 3, 4, 5];
numeros3.forEach ((num) => console.log (num));


numeros3.forEach ((num) => {
    if (num === 3){
        console.log (num);
    }
})

var masUno = numeros3.map ((num) => {
    return num +1;
})
console.log (masUno);