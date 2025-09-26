const prompt = require('prompt-sync')({sigint: true});

function contadorIntentos() {
  const usuarioCorrecto = 'user';
  const passwordCorrecto = 'pass';
  let intentos = 0;
  while (intentos < 3) {
    let usuario = prompt('Usuario: ');
    let password = prompt('Password: ');
    if (usuario === usuarioCorrecto && password === passwordCorrecto) {
      console.log('Login exitoso');
      return;
    } else {
      console.log('Credenciales incorrectas');
      intentos++;
    }
  }
  console.log('Intentos agotados');
}

