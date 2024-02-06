function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map((elemento) => {
    return elemento.toLocaleUpperCase();
  });
}

module.exports = convertirStringAMayusculas;
