function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let arrMayorA10 = array.filter((elemento) => elemento > 10);
  return arrMayorA10.length;
}

module.exports = contarElementosMayoresA10;
