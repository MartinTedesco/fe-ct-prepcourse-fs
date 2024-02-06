"use strict";

function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  const minValor = Math.min(a, b);
  const maxValor = Math.max(a, b);
  let producto = minValor;

  for (let i = minValor; i < maxValor; i++) {
    producto *= i + 1;
  }
  if (producto === 0) {
    producto = producto.toString();
    producto = Number(producto);
  }

  return producto;
}

module.exports = productoEntreNúmeros;
