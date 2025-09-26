function contarPares(arr) {
  return arr.filter(num => num % 2 === 0).length;
}

const numeros3 = [1, 2, 3, 4, 5, 6];
console.log("Ejercicio 3 - Cantidad de pares:", contarPares(numeros3));
