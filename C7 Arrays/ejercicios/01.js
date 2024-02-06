function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  let arr = new Array(...array);
  // let arr = [...array];
  return arr.shift();
}

// let array = ["hola", "como", "estas", "todo", "bien?"];
// console.log(devolverPrimerElemento(array));

module.exports = devolverPrimerElemento;
