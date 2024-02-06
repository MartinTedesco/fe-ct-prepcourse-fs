function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  let x;
  if (num > 0) x = "Es positivo";
  else if (num < 0) x = "Es negativo";
  else x = false;

  return x;
}

module.exports = esPositivo;
