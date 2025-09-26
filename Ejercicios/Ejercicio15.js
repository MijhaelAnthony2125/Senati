const prompt = require('prompt-sync')({sigint: true});

function mostrarMenu() {
  let opcion;
  do {
    console.log('1. Opción A');
    console.log('2. Opción B');
    console.log('3. Salir');
    opcion = prompt('Elige una opción: ');
  } while (opcion !== '3');
  console.log('¡Adiós!');
}

