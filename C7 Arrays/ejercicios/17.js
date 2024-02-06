function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0;
  for (let num of arrayOfNums) suma += num;
  return suma;
}

module.exports = agregarNumeros;
