const prompt = require('prompt-sync')({sigint: true});

function validarEntrada() {
  let num;
  do {
    num = parseInt(prompt('Ingresa un número mayor que 0: '), 10);
  } while (isNaN(num) || num <= 0);
  console.log('Número válido:', num);
}
