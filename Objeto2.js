var libro = {
    autor: "Borges",
    genero: "Policial",
    año: 1990
};
var tienePropiedad = libro.hasOwnProperty("nombre");
console.log(tienePropiedad);

var tienePropiedad2 = libro.hasOwnProperty("autor");
console.log(tienePropiedad2);

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);



var mundos = {
    continentes: 7,
    paises: 195,
    oceanos: 5
};
for (var prop in mundos){
    console.log("Esta es la propiedad:" + prop);
    console.log("Este el el valor" + mundos[prop]); 
}


var mascota = {
    animal: "Perro",
    raza: "Ovejero Alemán",
    amistoso: true,
    dueño: "Maria Lopez",
    info: function (){
        console.log ("Mi perro es un " + this.raza);
    }
};
mascota.info();