function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indiceNumMayor = 0;
  let maxEl = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxEl) {
      indiceNumMayor = i;
      maxEl = array[i];
    }
  }
  return indiceNumMayor;
}

module.exports = encontrarIndiceMayor;
