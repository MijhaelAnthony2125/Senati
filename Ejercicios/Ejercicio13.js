const prompt = require('prompt-sync')({sigint: true});

function cuentaRegresiva() {
  let num = parseInt(prompt('Ingresa un número para cuenta regresiva: '), 10);
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
