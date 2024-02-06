const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:

  let arrProp = propiedad.split(".");
  if (arrProp.length === 1) return objeto[propiedad];
  else {
    let valor = objeto;
    for (let prop of arrProp) {
      valor = valor[prop];
    }
  }
  return valor;
};

const objeto = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield",
  },
};

// console.log(objeto["direccion.calle"]);

// console.log(obtenerValorPropiedad(objeto, "direccion.calle"));
// console.log(obtenerValorPropiedad(objeto, 'direccion["numero"]'));
module.exports = obtenerValorPropiedad;
