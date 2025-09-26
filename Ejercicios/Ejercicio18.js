const prompt = require('prompt-sync')({sigint: true});

function sumarHastaCero() {
  let suma = 0;
  let num;
  do {
    num = parseInt(prompt('Ingresa un número (0 para terminar): '), 10);
    suma += num;
  } while (num !== 0);
  console.log('Suma total:', suma);
}
