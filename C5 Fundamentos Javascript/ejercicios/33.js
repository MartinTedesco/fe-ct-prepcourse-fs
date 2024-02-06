function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  const numAbs = Math.abs(numero);
  let esPrimo = numAbs === 1 ? false : true;

  for (let i = 2; i <= numAbs && esPrimo; i++)
    if (numAbs % i === 0 && numAbs !== i) esPrimo = false;

  return esPrimo;
}

module.exports = esNumeroPrimo;
