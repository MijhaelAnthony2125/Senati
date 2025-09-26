function fibonacciHasta100() {
  let a = 0, b = 1;
  while (a <= 100) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}

fibonacciHasta100();
