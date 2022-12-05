// Ejercicios:
// 1. Llene una lista con los numeros del 1 al 1000, lo puede hacer con cualquier metodo visto er
// clase: 10 puntos
function lista1000(){
  let lista = [];
  for(let i = 1; i <= 1000; i++){
    lista.push(i);
  }
  return lista;
}

console.log(lista1000());

// 2. Utilizando la siguiente let Lista = [2,3,4,5,6,7,8,10], realice las siguientes operaciones:
// a. Elimine el primero (5 puntos)
// b. Elimine el ultimo (5 puntos)
// C. Sume todos los elementos (5 puntos)
// d. Muestre unicamente los que sean pares (5 puntos)

let Lista = [2,3,4,5,6,7,8,10];
Lista.shift();

Lista.pop();

let suma = 0;
for (let i = 0; i < Lista.length; i++) {
  suma += Lista[i];
}

let pares = [];
for (let i = 0; i < Lista.length; i++) {
  if (Lista[i] % 2 === 0) {
    pares.push(Lista[i]);
  }
}

console.log(pares);

// 3. Llene una matriz con numeros impares, la matriz debe de ser 3 x3, o sea 3 filas, 3 columnas: 10 puntos

let matriz = [[], [], []];
let numero = 1;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        // @ts-ignore
        matriz[i][j] = numero;
        numero += 2;
    }
}
console.log(matriz);

//4. Realice una calculadora utilzando funciones, debe realizar las siguientes operaciones
// matematicas:
// a. Sumar (5 puntos)
// b. Restar (5 puntos)
// c. Dividir (5 puntos) PD: recuerden division entre 0
// d. Multiplicar (5 puntos)
// e. Raiz cuadrada (5 puntos)
// f. Potencia (5 puntos)

// Función para suma
function sumar(num1, num2) {
  return num1 + num2;
}

// Función para restar
function resta(num1, num2) {
  return num1 - num2;
}

// Función para dividir
function dividir(num1, num2) {
  if (num2 == 0) {
    return "No se puede dividir entre 0";
  }
  return num1 / num2;
}

// Función para multiplicar
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para sacar raíz cuadrada
function raizCuadrada(num) {
  return Math.sqrt(num);
}

// Función para sacar potencia
function potencia(num1, num2) {
  return Math.pow(num1, num2);
}


// Note: Los representan amigos. Suponga que los indices representan personas y que
// el valor en la fila , columnaj de una matriZ es verdadero simplemente en caso de que
// i Y J sean amigos y ralsos en caso contrario.

// Determine cuantos pares de amigOs estan representados en la matriz. lenga en
// cuenta que cada el par de amigos aparece dos veces en la matriz. (10 puntos)
// . Ejemplo [0,1] y |1,0] representa solo una sola amistad.

// Resultado esperado son 6 parejas de amigos.

// Comprobar si dos personas tienen un amigo en comun.

// Por ejemplo, 0y 4 son amigos de 3 (por lo que tienen un amigo en comun (0,3], 10,4J y 14,3|]),
// mientras que 1y 2 no tienen amigos en comun. (L0 puntos)

// Se le debe solicitar al usuario un i y un j (fila y columna
// respectivamente), y determinar si se tiene un amigo en comun se debe
// mostrar el número que tiene en comun.(10 puntos)

// Pueden definir la matriz en javascript de esta manera:

// Pista:
// matriz[0][1] = 1
// matriz[0][13] = 1
// matriz[0][4] = 1
// matriz[1][0]=1
// matriz[1][2]=1
// matriz[1][4] = 1
// matriz[2][1]=1
// matriz[3][0] 1
// matriz[3][14] = 1
// matriz[4][0] = 1
// matriz[4][1] = 1
// matriz[4][3] = 1