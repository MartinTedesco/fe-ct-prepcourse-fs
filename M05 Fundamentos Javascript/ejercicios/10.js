function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  return typeof fecha === "object" && !isNaN(new Date(fecha.getDate()))
    ? true
    : false;
}

module.exports = esFechaValida;
