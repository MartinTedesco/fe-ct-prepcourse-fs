function sort(sortBy, list) {
  // La función sort recibe dos parámetros:
  // sortBy: una letra (string).
  // list: un arreglo de objetos.
  // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
  // a partir de la letra recibida. Por ejemplo:
  // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
  // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
  // Tu código:

  // 1ER FORMA
  //   for (let i = 0; i < list.length; i++)
  //     for (let j = 0; j < list.length - i - 1; j++)
  //       if (list[j][sortBy] < list[j + 1][sortBy]) {
  //         let temp = list[j];
  //         list[j] = list[j + 1];
  //         list[j + 1] = temp;
  //       }

  //   return list;

  // 2DA FORMA
  function comparaObj(a, b) {
    return b[sortBy] - a[sortBy];
  }

  return list.sort(comparaObj);
}

// const arr = [
//   { a: 1, b: 3 },
//   { a: 3, b: 2 },
//   { a: 2, b: 40 },
// ];

module.exports = sort;
