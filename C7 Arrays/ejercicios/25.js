function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let totalPares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) ++totalPares;
    else continue;
  }

  return totalPares;
}

// console.log(contarParesConContinue([0, 1, 3, 4, 5, 6, 7]));

module.exports = contarParesConContinue;