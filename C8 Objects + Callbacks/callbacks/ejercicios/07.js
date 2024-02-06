function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  let newArr = [];

  function comienzaConA(elemento) {
    return elemento.length >= 1 && elemento[0] === "a" ? true : false;
  }

  for (let elemento of arrayOfStrings)
    if (comienzaConA(elemento)) newArr.push(elemento);

  return newArr;
}

module.exports = filter;
