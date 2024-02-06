function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  return array.findIndex((value) => value === elemento);
}

// let array = [1, 2, 3];

// console.log(encontrarElemento(6, array));

module.exports = encontrarElemento;
