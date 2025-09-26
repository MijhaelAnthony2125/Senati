function sumarPositivos(arr) {
  return arr.filter(num => num > 0).reduce((total, num) => total + num, 0);
}

const numeros8 = [3, -2, 5, -1, 6];
console.log("Ejercicio 8 - Suma positivos:", sumarPositivos(numeros8));
