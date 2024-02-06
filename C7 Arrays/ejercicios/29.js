function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  let tieneFaltante = false;
  let numFaltante = null;
  let i = 0;

  while (!tieneFaltante && i < numeros.length - 1) {
    if (!(numeros[i + 1] === numeros[i] + 1)) {
      numFaltante = numeros[i] + 1;
      tieneFaltante = true;
    }
    i++;
  }

  return numFaltante;
}

// console.log(encontrarNumeroFaltante([4, 5, 6, 7, 9]));

module.exports = encontrarNumeroFaltante;
