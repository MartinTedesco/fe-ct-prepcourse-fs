function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  let maxEl;
  maxEl = array[0];
  let arrayOrdenado = [];

  for (let i = 0; i < array.length; i++) {
    elemento = array[i];
    if (elemento >= maxEl) {
      maxEl = elemento;
      arrayOrdenado.push(elemento);
      continue;
    }
    for (let j = 0; j < arrayOrdenado.length; j++) {
      if (elemento <= arrayOrdenado[j]) {
        arrayOrdenado.splice(j, 0, elemento);
        break;
      }
    }
  }

  return arrayOrdenado;
}

module.exports = ordenarArray;
