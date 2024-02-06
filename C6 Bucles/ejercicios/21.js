function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let esPotencia = true;
  let control = numero;
  while (esPotencia) {
    if (control === 1) break;
    if (control % 1 > 0 || control === 0) esPotencia = false;
    control /= 2;
  }
  return esPotencia;
}

module.exports = esPotenciaDeDos;
