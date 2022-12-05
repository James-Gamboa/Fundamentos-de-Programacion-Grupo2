// Haga un programa en javascript que lea un numero de al menos 6 cifras (asuma que
//   es entero positivo, para simplificar, asuma que es mayor que 99999). Luego, el
//   programa cuenta todos los números entre 0 y el numero digitado que terminan en la
//   terminación del número inicial. (35) puntos
//   a. Numero inicial es = 193743, en este caso el ultimo digito seria 3, luego deben
//   de contar de 0 al nuero inicial, y cada vez que haya un número que termine
//   en 3 deben sumar un contador.
let numeroInicial = 193743;
let contador = 0;

for (let i = 0; i <= numeroInicial; i++) {
  if (i % 10 === 3) {
    contador++;
  }
}

console.log(`Hay ${contador} números entre 0 y ${numeroInicial} que terminan en 3.`);