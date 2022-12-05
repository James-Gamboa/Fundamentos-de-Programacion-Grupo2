// Explicar donde esta el error en este codigo y arreglo

// @ts-ignore
let numero = prompt("digite cualquier numero");
// @ts-ignore
if (numero == 1) {
    alert("llegue aqui");
}

  // El error está en el prompt, ya que para comprobar un número se debe usar el operador de comparación "===" 
  // en lugar del operador "==".

//la forma correcta es 
// @ts-ignore
let numero = prompt("digite cualquier numero");
// @ts-ignore
if (numero === 1) {
    alert("llegue aqui");
}