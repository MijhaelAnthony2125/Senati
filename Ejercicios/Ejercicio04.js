function ordenarArray(arr) {
  let arrCopy = [...arr];
  let n = arrCopy.length;
  for (let i = 0; i < n -1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arrCopy[j] > arrCopy[j+1]) {
        [arrCopy[j], arrCopy[j+1]] = [arrCopy[j+1], arrCopy[j]];
      }
    }
  }
  return arrCopy;
}

const numeros4 = [5, 3, 8, 1, 2];
console.log("Ejercicio 4 - Ordenado:", ordenarArray(numeros4));
