// Escriba un programa, que solicite una serie de números al usuario, separados por coma.
// Luego convertir esta serie de números a una lista de JavaScript. Posteriormente devolver la
// multiplicación de todos los elementos de la lista.
// . Ejemplo: Si el usuario ingreso 3,1,2,3 el resultado de la multiplicación será: 18
const numString = prompt("Ingrese una serie de números separados por coma: ");
// @ts-ignore
const numList = numString.split(",");

let result = 1; 

for (let num of numList) { 
  result *= Number(num); 
}

console.log(`El resultado de la multiplicación es: ${result}`);

// Escriba un programa, que solicite una serie de numeros al usuario, separados por coma.
// Luego convertir esta serie de números a una lista de JavaScript. Posteriormente el
// programa deberá intercambiar el primer y último elemento de la lista.
// . EJemplo:
// Lista: [1, 2, 3]
// Resultado: [13, 2, 1]

let numbers = prompt("Ingrese una serie de números separados por coma");

// @ts-ignore
let list = numbers.split(",").map(Number);

let temp = list[0];
list[0] = list[list.length - 1];
list[list.length - 1] = temp;

// Mostrando el resultado
console.log(list);

// Escriba un programa, que solicite una serie de numeros al usuario, separados por coma.
// Luego convertir esta serie de numeros a una lista de Javašcript, esta lista podria contener
// numeros duplicados en ella. se debe generar otra lista, que contiene solo los elementos
// duplicados. En palabras simples, la nueva lista debe contener los elementos que
// aparecen más de una vez en los números ingresados por el usuario.
// a. Ejemplo:
// i. Lista = [-2, 1,-2, 8]
// i. lista_salida = [-2]
// @ts-ignore
let lista = prompt("Por favor, ingresa una lista de numeros separados por comas: ");

// @ts-ignore
let lista_entrada = lista.split(",");
// @ts-ignore
let lista_salida = [];

for (let i = 0; i < lista_entrada.length; i++) {
    let elemento = lista_entrada[i];
    for (let j = 0; j < lista_entrada.length; j++) {
        if (i != j && elemento == lista_entrada[j] && !lista_salida.includes(elemento)) {
            lista_salida.push(elemento);
        }
    }
}

console.log("Lista de entrada: " + lista_entrada);
console.log("Lista de salida: " + lista_salida);

// Escriba un programa, que solicite una serie de números al usuario, separados por coma.
// Luego convertir esta serie de números a una lista de JavaScript. Posteriormente, solicitar
// un número al usuario, y remover de la lista todas las veces que aparezca dicho número.
// a. Ejemplo:
// Lista: [1, 3, 4, 6, 5, 1, 3]
// i. Numero ingresado por el usuario: 3
// ii. lista_salida: [1,4, 6, 5, 1]

// @ts-ignore
let lista = prompt('Ingrese una serie de números separados por coma').split(',');
// @ts-ignore
let numero = parseInt(prompt('Ingrese un número'));
// @ts-ignore
let lista_salida = [];

// @ts-ignore
for (let i = 0; i < lista.length; i++) {
    // @ts-ignore
    if (parseInt(lista[i]) !== numero) {
        // @ts-ignore
        lista_salida.push(parseInt(lista[i]));
    }
}

console.log(lista_salida);