function mayorYMenor(arr) {
  return {
    mayor: Math.max(...arr),
    menor: Math.min(...arr)
  };
}

const numeros2 = [3, 7, 2, 9, 4];
console.log("Ejercicio 2 - Mayor y menor:", mayorYMenor(numeros2));
