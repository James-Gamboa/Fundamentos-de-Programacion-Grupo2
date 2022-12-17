let altura = prompt("Digite Su Altura");
let peso = prompt("Digite su Peso");
// @ts-ignore
let imc = peso / (altura * altura)
alert(imc);

if (imc < 18.5) {
  alert("Bajo peso");
} else if (imc > 18.5 && imc < 24.9) {
  alert("Normal");
} else if (imc > 24.9 && imc < 29.9) {
  alert("Sobrepeso");
} else if ( imc < 30) {
  alert("Obesidad");
}