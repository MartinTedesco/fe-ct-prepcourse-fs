function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let newArr = [];
  for (let i = 0; i < array.length; i++) newArr.push(array[i] * i);
  return newArr;
}

module.exports = multiplicarElementosPorIndice;
