function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let firstEl = array[0];
  return array.every((elemento) => elemento === firstEl);
}

module.exports = todosIguales;
