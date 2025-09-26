function primerMultiploDeCinco(arr) {
  return arr.find(num => num % 5 === 0);
}

const numeros9 = [1, 3, 7, 10, 15];
console.log("Ejercicio 9 - Primer múltiplo de 5:", primerMultiploDeCinco(numeros9));
