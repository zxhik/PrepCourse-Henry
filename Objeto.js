var deportes = {
    conBalon: ["Fotball", "Basquetball", "Rugby"],
    sinBalon: ["Boxeo", "Surf", "Trekking"]
};

var persona = {
    nombre: "Lucas",
    edad: 26,
    estudios: {
        esProgramador: true
    }
};

console.log (persona.edad);

persona.nombre = "Martin";
console.log(persona.nombre);

persona.edad = 32;
console.log(persona.edad);


var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrrary"];
delete autos.marcas;
console.log(autos);


var misFunciones = {
    saludar: function(){
        console.log ("Hola");
    },
};
misFunciones.saludar ();


var atuendos = {
    manos: ["guantes", "anillos"],
    pies: ["zapatos", "soquetes"]
};
console.log (atuendos.manos);
atuendos["piernas"] = ["pantalones", "bermudas"];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas[propUno] = ["Frutas", "Vegetales"],
    comidas[propDos] = ["Hamburguesa", "Papas fritas"]
};
diferenciaDeNotaciones("Saludable", "NoSaludable");
console.log(comidas);