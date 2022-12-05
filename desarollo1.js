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
  alert("excelente te ganaste un abrazo😊");
}
