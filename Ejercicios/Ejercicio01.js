function sumarArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

const numeros1 = [1, 2, 3, 4, 5];
console.log("Ejercicio 1 - Suma del array:", sumarArray(numeros1));
