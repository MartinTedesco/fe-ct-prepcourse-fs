function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  let multiplo = 0;

  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      multiplo = secuencia[i];
      break;
    }
  }
  return multiplo;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(encontrarPrimerMultiploDeN(7, arr));
module.exports = encontrarPrimerMultiploDeN;
