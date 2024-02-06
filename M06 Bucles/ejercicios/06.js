function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return num / 100 >= 1 && num / 100 < 10;
}

module.exports = tieneTresDigitos;
