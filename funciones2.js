function cuidadaoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
    cuidadaoConElConsoleLog('Camilo')
}

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre); /* No se ejecuta */
}



