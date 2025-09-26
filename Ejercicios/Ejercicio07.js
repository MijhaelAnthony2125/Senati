function convertirMayusculas(arr) {
  return arr.map(nombre => nombre.toUpperCase());
}

const nombres7 = ["Ana", "Juan", "Pedro", "Maria"];
console.log("Ejercicio 7 - Mayúsculas:", convertirMayusculas(nombres7));
