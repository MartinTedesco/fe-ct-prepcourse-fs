/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  // let newArr = [];

  // for (let prop in objeto) {
  //   newArr.push([prop, objeto[prop]]);
  // }
  // return newArr;

  return Object.entries(objeto);
}

// let obj = { D: 1, B: 2, C: 3 };
// let arr = [1, 2, 3];

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let newObjet = {};
  let arrStr = string.split("").sort();

  // METODO EN CASO QUE NO ESTE ORDENADO EL ARRAY
  // function contarRepetidos(valor, array) {
  //   let filtrados = array.filter((elemento) => elemento === valor);
  //   console.log(filtrados);
  //   return filtrados.length;
  // }

  // for (let i = 0; i < arrStr.length; i++) {
  //   let contador = contarRepetidos(arrStr[i], arrStr);
  //   newObjet[arrStr[i]] = contador;
  // }

  let contador = 1;

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i + 1] === arrStr[i]) {
      ++contador;
      continue;
    }
    newObjet[arrStr[i]] = contador;
    contador = 1;
  }

  return newObjet;
}

// let string = "adsjfdsfsfjsdjfhacabcsbajda";
// console.log(numberOfCharacters(string));

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let lowerArr = string
    .split("")
    .filter((letra) => letra.toLowerCase() === letra);
  let upperArr = string
    .split("")
    .filter((letra) => letra.toUpperCase() === letra);

  return upperArr.concat(lowerArr).join("");
}

// let string = "PhaUbiaTuOnavezELunQUperELEroEmalo";
// console.log(capToFront(string));

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  let splitArr = frase.split(" ");
  let fraseInvertida = [];

  function mirrorWord(word) {
    let mirrWord = [];
    for (let i = word.length - 1; i >= 0; i--) mirrWord.push(word[i]);
    return mirrWord.join("");
  }

  for (let palabra of splitArr) {
    let palabraInv = mirrorWord(palabra);
    fraseInvertida.push(palabraInv);
  }

  return fraseInvertida.join(" ");
}

// console.log(mirrorWord("Henry"));
// console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let strNumero = numero.toString();

  function mirrorWord(word) {
    let mirrWord = [];
    for (let i = word.length - 1; i >= 0; i--) mirrWord.push(word[i]);
    return mirrWord.join("");
  }

  return mirrorWord(strNumero) === strNumero ? "Es capicua" : "No es capicua";
}

// console.log(capicua(12321));

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let letrasAFiltrar = ["a", "b", "c"];
  return string
    .split("")
    .filter((letra) => !letrasAFiltrar.includes(letra))
    .join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arrMerge = array1.concat(array2).sort();
  let arrComun = [];
  for (let valor of arrMerge) {
    if (
      array1.includes(valor) &&
      array2.includes(valor) &&
      !arrComun.includes(valor)
    )
      arrComun.push(valor);
  }
  return arrComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
