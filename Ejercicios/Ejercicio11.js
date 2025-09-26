function fibonacci10() {
  const fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}

console.log("Ejercicio 11 - Fibonacci 10 números:", fibonacci10());
