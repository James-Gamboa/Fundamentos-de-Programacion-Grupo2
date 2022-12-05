// @ts-nocheck
// 1. Escribir un programa para imprimir la tabla de multiplicar de un número dado. Por
// ejemplo si un usuario digita 2, va a mostrar la tabla de multiplicar con 2. Ejemplo:
// 2,4,6,8,10...
// @ts-ignore
let numero = prompt("Por favor ingrese un número");

for (let i = 1; i <= 10; i++) {
  console.log(numero + 'x' + i + '=' + numero*i);
}

// 2. Escriba un programa para mostrar solo aquellos números de una lista que satisfagan las
// siguientes condiciones.
// a. El número debe ser divisible por cinco.
// b. Si el número es mayor que 150, sáltelo y pase al siguiente número
// c. Si el número es mayor que 500, detenga el ciclo
// La lista es la siguiente: numbers [12, 75, 150, 180, 145, 525, 50]
let numbers = [12, 75, 150, 180, 145, 525, 50];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 == 0 && numbers[i] < 150) {
    console.log(numbers[i]);
  }
  if (numbers[i] > 500) {
    break;
  }
}

// 3. Escriba un programa para imprimir el cubo de todos los números del 1 a un número dado
// a. Por ejemplo: 23, que es igual a 2x2x2

for (var i = 1; i <= 23; i++) {
  console.log(i + ' al cubo es igual a ' + i*i*i);
}