let finDeCiclo = 10;
let sumatoria = 0;

for (let i = 0; i < finDeCiclo; i++) {
  //inserte un bloque de codigo que sume todos los numeros pares, unicamente pares.
  if (i % 2 === 0) {
    sumatoria = sumatoria + i;
  }
}
alert(sumatoria);
