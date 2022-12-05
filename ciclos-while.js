// 1. Haga un programa que lea 2 números, detecte el menor, e imprima todos los números
// desde el menor hasta el mayor de ambos
let num1 = prompt("Por favor ingrese el primer número");
let num2 = prompt("Por favor ingrese el segundo número");

let menor = 0;
let mayor = 0;

// @ts-ignore
if (num1 < num2) {
    // @ts-ignore
    menor = num1;
    // @ts-ignore
    mayor = num2;
} else {
    // @ts-ignore
    menor = num2;
    // @ts-ignore
    mayor = num1;
}

// @ts-ignore
let i = menor;
while (i <= mayor) {
    console.log(i);
    i++;
}
// 2. Haga un programa que lea un número y calcule la suma de todos los números PARES
// entre 0 y él.


// @ts-ignore
var numero = parseInt(prompt("Por favor ingrese un número: "));
// @ts-ignore
var i = 0;
var suma = 0;

while (i <= numero) {
    if (i % 2 === 0) {
        suma = suma + i;
    }
    i++;
}

console.log("La suma de los números pares entre 0 y " + numero + " es: " + suma);
// 3. Haga un número que lea varios números, se detiene cuando lee un cero, e imprima
// cuantos números leyó
// @ts-ignore
numero = int(input("Ingresa un número: "))
// @ts-ignore
contador = 0

// @ts-ignore
while (numero != 0);
    // @ts-ignore
    contador += 1
    // @ts-ignore
    numero = int(input("Ingresa un número: "))
    
// @ts-ignore
print("Se leyeron {} números.".format(contador))

// 4. Haga un programa que lea varios números, se detiene cuando lee un cero e imprime el
// PROMEDIO de los números que leyó
let number = 1;
let sum = 0;
let count = 0;

while (number !== 0) {
  // @ts-ignore
  number = prompt("Ingrese un número (ingrese 0 para terminar)");
  // @ts-ignore
  sum += parseInt(number);
  count++;
}

const average = sum / (count - 1);
console.log(`El promedio de los números leídos es ${average}`);

// 5. Haga un programa que lea un número e imprima:
// a. Si el número es par, calcula numero/ 2 e imprime el valor resultante.
// b. Si el número es impar, calcular (número 3) +1, e imprime el valor resultando.
// c. Evalúa el resultado de la operación.
// d. EL PROBLEMA DEBE DETENERSE CUANDO EL RESULTADO DE LA
// OPERACIÓN SEA 1


//Programa para evaluar un número

//Declaración de variables
// @ts-ignore
let numero;

//Pedimos que el usuario ingrese un número
// @ts-ignore
numero = parseInt(prompt("Por favor ingrese un número"));

//Evaluamos si el número es par o impar
if (numero % 2 == 0) {
    //Si el número es par
    numero = numero/2;
    console.log("El número es par, el resultado de la operación es " + numero);
} else {
    //Si el número es impar
    numero = (numero * 3) + 1;
    console.log("El número es impar, el resultado de la operación es " + numero);
}

//Evaluamos el resultado de la operación:
while (numero != 1) {
    if (numero % 2 == 0) {
        //Si el número es par
        numero = numero/2;
        console.log("El resultado de la operación es " + numero);
    } else {
        //Si el número es impar
        numero = (numero * 3) + 1;
        console.log("El resultado de la operación es " + numero);
    }
}

console.log("¡El problema ha concluido!");