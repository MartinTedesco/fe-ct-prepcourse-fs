function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  let arrayInvertido = [];

  let colocarAlFinal = function (elemento) {
    arrayInvertido.unshift(elemento);
  };
  array.forEach(colocarAlFinal);

  return arrayInvertido;
}

// console.log(invertirArray([1, "hola", true, null, undefined]));

module.exports = invertirArray;
