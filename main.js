// Tarea if
// 1- Generar un programa que pida los años de edad de una persona, con esta edad se
// genera un if el cual determinará su ciclo de vida si la persona tiene igual o menos de 3 años
// es un bebe, si su edad es igual o mayor a 4 años pero menor a 12 es un niño, si es igual o
// mayor a 12 años pero menor a 18 años está en la adolescencia, si es igual o mayor a 18
// pero menor a 65 es adulto, si es igual o mayor a 65 años es adulto mayor.
let edad = prompt("¿Cuál es tu edad?");

// @ts-ignore
edad = Number(edad);

// @ts-ignore
if (edad >= 0 && edad < 3) {
  alert("Eres un bebe");
  // @ts-ignore
} else if (edad >= 4 && edad < 12) {
  alert("Eres un niño");
  // @ts-ignore
} else if (edad >= 12 && edad < 18) {
  alert("Eres un adolescente");
  // @ts-ignore
} else if (edad >= 18 && edad < 65) {
  alert("Eres un adulto");
  // @ts-ignore
} else if (edad == 65 && edad < 65) {
  alert("Eres un adulto mayor");
}

// 2- Generar un programa que le pida a una persona un color del semaforo,con este se debe
// determinar que se debe de hacer cuando un semaforo este en rojo,verde o amarillo, si este
// esta en verde debe decir siga, si esta en amarillo precaucion, si esta en rojo alto, si la
// persona dijita un color que no pertenece al semaforo debe aparecer un alert que diga que
// debe digitar un color del semaforo.
let color = prompt("Digite el color del semaforo");

if (color == "rojo") {
  alert("ALTO");
} else if (color == "amarillo") {
  alert("PRECAUCION");
} else if (color == "verde") {
  alert("SIGA");
} else {
  alert("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA VERDE, AMARILLO, ROJO");
}

// 3-Generar un programa que le pida a una persona un país, con este dato se debe
// determinar de qué continente es el país si este es de África, América, Asia u Oceanía.
// lista de países:
// América:
// Costa Rica
// Argentina
// Colombia
// Nicaragua
// Panamá
// Uruguay
// Estados Unidos
// Canadá
// México
// Europa:
// España
// Italia
// Francia
// Rumania
// Inglaterra
// Alemania
// África:
// Nigeria
// Kenia
// Ghana
// Marruecos
// Senegal
// Oceanía:
// Nueva Zelanda 😈
// Australia
// Fiyi
// Tonga

// @ts-ignore
let pais = prompt("Ingrese el nombre de su pais");
alert(pais?.toUpperCase().replace(/ /g,""));

if (pais == "costa rica"){
  alert("Este es un pais America")
} else if (pais == "argentina"){
  alert("Este es un pais America")
}  else if (pais == "colombia"){
  alert("Este es un pais America")
}  else if (pais == "nicaragua"){
  alert("Este es un pais America")
}  else if (pais == "panamá"){
  alert("Este es un pais America")
}  else if (pais == "uruguay"){
  alert("Este es un pais America")
}  else if (pais == "estados unidos"){
  alert("Este es un pais America")
}  else if (pais == "canadá"){
  alert("Este es un pais America")
}  else if (pais == "méxico"){
  alert("Este es un pais America")
}  else if (pais == "españa"){
  alert("Este es un pais Europa")
}   else if (pais == "italia"){
  alert("Este es un pais Europa")
}   else if (pais == "francia"){
  alert("Este es un pais Europa")
}   else if (pais == "rumania"){
  alert("Este es un pais Europa")
}   else if (pais == "inglaterra"){
  alert("Este es un pais Europa")
}   else if (pais == "alemania"){
  alert("Este es un pais Europa")
}  else if (pais == "nigeria"){
  alert("Este es un pais África")
} else if (pais == "kenia"){
  alert("Este es un pais África")
} else if (pais == "ghana"){
  alert("Este es un pais África")
} else if (pais == "marruecos"){
  alert("Este es un pais África")
} else if (pais == "senegal"){
  alert("Este es un pais África")
} else if (pais == "nueva zelanda"){
  alert("Este es un pais Oceanía")
} else if (pais == "australia"){
  alert("Este es un pais Oceanía")
} else if (pais == "fiyi"){
  alert("Este es un pais Oceanía")
} else if (pais == "tonga"){
  alert("Este es un pais Oceanía")
}else {("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA SU PAÍS");
} 
// 4-Generar un programa en el cual cuando una persona digite un hola en todas sus formas
// como por ejemplo Hola,hola,HOLA,ola,hi,hello este debe responder hola,buen día.
// @ts-ignore
let saludar = prompt("Digite un Hola");

if (saludar == "Hola") {
  alert("Hola,buen dia");
} else if (saludar == "hola") {
  alert("hola,buen dia");
} else if (saludar == "HOLA") {
  alert("HOLA,buen dia");
} else if (saludar == "ola") {
  alert("ola,buen dia");
}  else if (saludar == "hi") {
  alert("hi,buen dia");
}  else if (saludar == "hello") {
  alert("hello,buen dia");
}  else {
  alert(
    "NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y DIGITE UN HOLA"
  );
}

// 5-Generar un programa en el cual una persona digite un buenos días, buenas tardes o
// buenas noches y según lo que digite esta persona se le contesta de la misma forma buenos
// días,buenas tardes,buenas noches.
// @ts-ignore
let saludar = prompt("Digite un buenos dias,buenas tardes o buenas noches");

if (saludar == "buenos dias") {
  alert("buenos dias");
} else if (saludar == "buenas tardes") {
  alert("buenas tardes");
} else if (saludar == "buenas noches") {
  alert("buenas noches");
} else {
  alert("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA BUENOS DIAS, BUENAS TARDES, BUENAS NOCHES");
}

// 6-Crear una calculadora en el cual los siguientes numeros seran las siguientes opciones:
// 1-suma
// 2-resta
// 3-multiplicación
// 4-división
// por ejemplo si la persona digita el número 2 se debe limpiar el input después se digitan dos
// numero y estos se deben restar y mostrar el resultado de la operación.
// @ts-nocheck
let operacion = prompt("¿Qué operación desea? 1-Sumar 2-Restar 3-Multiplicar 4-Dividir.");
let operando1 ;
let operando2 ;
let resultado ;

//Impedir que pida los operandos en caso error
// @ts-ignore
if(operacion >= 1 && operacion <=4){
  // @ts-ignore
  operando1 = parseInt (prompt("Introduce el primer número: "));
  // @ts-ignore
  operando2 = parseInt (prompt ("Introduce el segundo número: "));
}

//funcion de suma
function suma(numero1, numero2){
  return numero1 + numero2;
}

//funcion de resta
function resta(numero1, numero2){
  return numero1 - numero2;
}

//funcion de multiplicar
function multiplicar(numero1, numero2){
  return numero1 * numero2;
}

//funcion de dividir
function dividir(numero1, numero2){
  return numero1 / numero2;
}

//llamadas y resultados
switch(operacion){
  case "1":
  resultado = suma(operando1, operando2);
  document.write("El resultado de la suma es:" +resultado);
  break;


case "2":
resultado = resta(operando1, operando2);
document.write("El resultado de la resta es:" +resultado);
break;


case "3":
resultado = multiplicar(operando1, operando2);
document.write("El resultado de la multiplicar es:" +resultado);
break;


case "4":
resultado = dividir(operando1, operando2);
document.write("El resultado de la division es:" +resultado);
break;

default:
  alert("La opción especificada no es correcta");
  break;
}

// 7-sacar el promedio de tres notas en la cual la nota mayor es de 100 y la mínima 0,
// si el promedio es menor a 65 debe decir que esta quedado, si es igual o mayor a 65 pero
// menor a 70 debe decir pasó raspando, si es mayor a 70 pero menor o igual a 85 que diga
// no esta mal, si es mayor a 85 pero menor o igual a 99 que diga muy bien, si la nota es igual
// a 100 que diga excelente te ganaste un abrazo :)
let notas = prompt("¿Cuál es tu nota?");


// @ts-ignore
if (notas >= 0 && notas <= 65) {
  alert("esta quedado");
  // @ts-ignore
} else if (notas >= 65 && notas <= 70) {
  alert("pasó raspando");
  // @ts-ignore
} else if (notas >= 70 && notas <= 85) {
  alert("no esta mal");
  // @ts-ignore
} else if (notas >= 85 && notas <= 99) {
  alert(" muy bien");
  // @ts-ignore
} else if (notas == 100 && notas == 100) {
  alert("excelente te ganaste un abrazo");
}



// 8- generar un if en el cual si la persona pone que quiere algo salado le muestre pan de
// pizza, pan con jamón y queso, si pone algo dulce que muestre flauta de guayaba, cacho de
// dulce de leche, pañuelo de crema pastelera.
let comida = prompt("Escoja de las siguiente opciones salado (1) pan de pizza o salado (2) pan con jamon y queso ( si quieres algo dulce digita X )");
let comidas = prompt("Escoja de las siguiente opciones dulce (1) flauta de guayaba (2) cacho de dulce de leche (3) pañuelo de crema pastelera ");
if (comida == "1") {
  alert("pan de pizza");
} else if (comida == "2") {
  alert("pan con jamon y queso");
} else if (comidas == "1") {
  alert("flauta de guayaba");
} else if (comidas == "2") {
  alert("cacho de dulce de leche");
} else if (comidas == "3") {
  alert("pañuelo de crema pastelera");
} else {
  alert("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA SALADO O DULCE");
}
// 9- pedir que se digite un año y que este indique si hay mundial o no que cuente desde el
// 2002 recordar que los mundiales son cada 4 años.
// @ts-ignore
let año = prompt("Digite su año");


if (año == "2002") {
  alert("MUNDIAL 2002 - COREA DEL SUR Y JAPÓN");
} else if (año == "2003") {
  alert("NO AHI MUNDIAL");
}else if (año == "2004") {
  alert("NO AHI MUNDIAL");
}else if (año == "2005") {
  alert("NO AHI MUNDIAL");
}else if (año == "2006") {
  alert("MUNDIAL 2006 - ALEMANIA");
}else if (año == "2007") {
  alert("NO AHI MUNDIAL");
}else if (año == "2008") {
  alert("NO AHI MUNDIAL");
}else if (año == "2009") {
  alert("NO AHI MUNDIAL");
}else if (año == "2010") {
  alert("MUNDIAL 2010 - SUDÁFRICA");
}else if (año == "2011") {
  alert("NO AHI MUNDIAL");
}else if (año == "2012") {
  alert("NO AHI MUNDIAL");
}else if (año == "2013") {
  alert("NO AHI MUNDIAL");
}else if (año == "2014") {
  alert("MUNDIAL 2014 - BRASIL");
}else if (año == "2015") {
  alert("NO AHI MUNDIAL");
}else if (año == "2016") {
  alert("NO AHI MUNDIAL");
}else if (año == "2017") {
  alert("NO AHI MUNDIAL");
}else if (año == "2018") {
  alert("MUNDIAL 2018 - RUSIA");
}else if (año == "2019") {
  alert("NO AHI MUNDIAL");
}else if (año == "2020") {
  alert("NO AHI MUNDIAL");
}else if (año == "2021") {
  alert("NO AHI MUNDIAL");
}else if (año == "2022") {
  alert("MUNDIAL 2022 - QATAR");
}else if (año == "2023") {
  alert("NO AHI MUNDIAL");
}else if (año == "2024") {
  alert("NO AHI MUNDIAL");
}else if (año == "2025") {
  alert("NO AHI MUNDIAL");
}else if (año == "2026") {
  alert("MUNDIAL 2026 - MÉXICO, ESTADOS UNIDOS Y CANADÁ");
}else {
  alert("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA SU AÑO");
}


// 10-pedir que se digite un año y que este indique si ese año messi gano un balon de oro
// messi ganó balón de oro en los años 2010,2011,2012,2015,2019,2022
// @ts-ignore
let año = prompt("Digite su año");


if (año == "2002") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2003") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2004") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2005") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2006") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2007") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2008") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2009") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2010") {
  alert("MESSI GANO UN BALON DE ORO");
} else if (año == "2011") {
  alert("MESSI  GANO UN BALON DE ORO");
} else if (año == "2012") {
  alert("MESSI  GANO UN BALON DE ORO");
} else if (año == "2013") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2014") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2015") {
  alert("MESSI  GANO UN BALON DE ORO");
} else if (año == "2016") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2017") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2018") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2019") {
  alert("MESSI  GANO UN BALON DE ORO");
} else if (año == "2020") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2021") {
  alert("MESSI NO GANO UN BALON DE ORO");
} else if (año == "2022") {
  alert("MESSI GANO UN BALON DE ORO");
}else {
  alert("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA SU AÑO");
}


// 11-pedir que se digite un país y que se indique si este país ha ganado un mundial.
// Brasil, Italia, Alemania, Francia, Argentina, Uruguay, España, Inglaterra.
// @ts-ignore
let pais = prompt("Ingrese el nombre de su pais");
alert(pais?.toUpperCase().replace(/ /g,""));

if (pais == "costa rica"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "argentina"){
  alert("Este es un pais que ha ganado un mundial")
}  else if (pais == "colombia"){
  alert("Este es un pais que no ha ganado un mundial")
}  else if (pais == "nicaragua"){
  alert("Este es un pais que no ha ganado un mundial")
}  else if (pais == "panamá"){
  alert("Este es un pais que no ha ganado un mundial")
}  else if (pais == "uruguay"){
  alert("Este es un pais que  ha ganado un mundial")
}  else if (pais == "estados unidos"){
  alert("Este es un pais que no ha ganado un mundial")
}  else if (pais == "canadá"){
  alert("Este es un pais que no ha ganado un mundial")
}  else if (pais == "méxico"){
  alert("Este es un pais que no ha ganado un mundial")
}  else if (pais == "españa"){
  alert("Este es un pais que  ha ganado un mundial")
}  else if (pais == "brasil"){
  alert("Este es un pais que  ha ganado un mundial")
}   else if (pais == "italia"){
  alert("Este es un pais que  ha ganado un mundial")
}   else if (pais == "francia"){
  alert("Este es un pais que  ha ganado un mundial")
}   else if (pais == "rumania"){
  alert("Este es un pais que no ha ganado un mundial")
}   else if (pais == "inglaterra"){
  alert("Este es un pais que  ha ganado un mundial")
}   else if (pais == "alemania"){
  alert("Este es un pais que  ha ganado un mundial")
}  else if (pais == "nigeria"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "kenia"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "ghana"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "marruecos"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "senegal"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "nueva zelanda"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "australia"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "fiyi"){
  alert("Este es un pais que no ha ganado un mundial")
} else if (pais == "tonga"){
  alert("Este es un pais que no ha ganado un mundial")
}else {
  ("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA SU PAÍS");
}

// 12-pedir que digite un jugador de fútbol y que diga si es el mejor del mundo o no,
// solo puede decir que messi o cristiano o maradona son los mejores.

let futbol = prompt("Digite un jugador de futbol");

if (futbol == "Messi") {
  alert("el mejor del mundo");
} else if (futbol == "Cristiano Ronaldo") {
  alert("el mejor del mundo");
} else if (futbol == "Maradona") {
  alert("el mejor jugador del mubdo");
} else if (futbol == "Robert Lewandowski"){
  alert("no es el mejor jugador del mundo")
}  else if (futbol == "Mohamed Salah"){
  alert("no es el mejor jugador del mundo")
}  else if (futbol == "Kylian Mbappe"){
  alert("no es el mejor jugador del mundo")
}  else if (futbol == "Erling Haaland "){
  alert("no es el mejor jugador del mundo")
}  else if (futbol == "Karim Benzema"){
  alert("no es el mejor jugador del mundo")
}  else if (futbol == "Neymar"){
  alert("no es el mejor jugador del mundo")
} 
else {
  alert("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA A UN JUGADOR DE FÚTBOL");
}

// 13- pedir que se digite un número e indicar si es par o impar.
let numero ;
numero = prompt("Introduzca su numero");
// @ts-ignore
if(numero % 2 == 0){
  alert("El número "+ numero +" es par");
}else {
  alert("El número "+ numero +" es impar");
}

