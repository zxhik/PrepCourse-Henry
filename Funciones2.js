function CuidadoConElConsoleLog (nombre){
    console.log (nombre);
}

function OtraFuncion (){
    return(
        "El nombre retornado por la funcion CuidadoConElConsoleLog es: " + 
        CuidadoConElConsoleLog("Lorenzo")
    );
}

function CuidadoConElReturn(nombre){
    return nombre;
    console.log (nombre);
}