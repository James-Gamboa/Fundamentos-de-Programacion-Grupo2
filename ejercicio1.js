let maquinaPrendida = true;
let cantidadVoltios = 0;

while (maquinaPrendida) {
    cantidadVoltios = cantidadVoltios + 1;
    // Inserte un bloque de codigo que haga que el programa termine cuando la maquina supere los 100 volteos

if (cantidadVoltios > 100) {
    maquinaPrendida = false;
}
}

alert(cantidadVoltios);