const prompt = require('prompt-sync')({sigint: true});

function adivinarNumero() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intento;
  do {
    intento = parseInt(prompt('Adivina el número entre 1 y 10: '), 10);
  } while (intento !== numeroSecreto);
  console.log('¡Correcto!');
}
