function sumarImpares() {
  let suma = 0;
  for (let i = 1; i <= 50; i += 2) {
    suma += i;
    if (suma > 500) {
      break;
    }
  }
  return suma;
}

console.log("Ejercicio 16 - Suma impares hasta 50 o suma > 500:", sumarImpares());
