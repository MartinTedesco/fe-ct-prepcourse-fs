function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let strInv = "";
  for (let i = texto.length; i > 0; i--) strInv = strInv.concat(texto[i - 1]);
  return strInv;
}

module.exports = invertirTexto;
