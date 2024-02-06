function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let tieneRepetido = false;
  let valorRepetido = undefined;
  let i = 0;

  while (!tieneRepetido && i < numeros.length) {
    let arr = numeros.filter((num) => num === numeros[i]);
    if (arr.length > 1) {
      valorRepetido = numeros[i];
      tieneRepetido = true;
    }
    i++;
  }
  return valorRepetido;
}
let arr = [1, 2, 3, 4, 5, 6];

console.log(encontrarElementoRepetido(arr));

module.exports = encontrarElementoRepetido;
