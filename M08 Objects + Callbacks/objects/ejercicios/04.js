function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person.prototype.address = "123 Main St";
// const john = new Person("John", 30);
// console.log(john);
// console.log(verificarPropiedad(john, "address"));

module.exports = verificarPropiedad;
