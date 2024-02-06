function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  let strInv = "";
  for (let i = string.length; i > 0; i--) strInv = strInv.concat(string[i - 1]);
  strInv = strInv.replaceAll(" ", "");
  string = string.replaceAll(" ", "");
  return string.toLocaleLowerCase() === strInv.toLocaleLowerCase();
}

module.exports = esPalindromo;
