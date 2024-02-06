function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  const vocales = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const x =
    letra.length === 1 && vocales.has(letra) ? "Es vocal" : "Dato incorrecto";

  return x;
}

module.exports = esVocal;
