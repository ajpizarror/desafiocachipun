let cantidadJuegos = prompt("¿Cuántas veces deseas jugar al cachipún?");

let puntajeUsuario = 0;
let puntajeMaquina = 0;

for (let i = 0; i < cantidadJuegos; i++) {
  let jugadaUsuario = parseInt(
    prompt("¿Qué escoges? Piedra = 0; Papel = 1; Tijeras = 2")
  );
  let jugadaMaquina = Math.floor(Math.random() * 3);

  switch (jugadaUsuario) {
    case 0:
      if (jugadaMaquina === 0) {
        alert("La máquina escogió piedra. Empate.");
      } else if (jugadaMaquina === 1) {
        alert("La máquina escogió papel. Perdiste.");
        puntajeMaquina++;
      } else if (jugadaMaquina === 2) {
        alert("La máquina escogió tijeras. Ganaste.");
        puntajeUsuario++;
      }
      break;

    case 1:
      if (jugadaMaquina === 0) {
        alert("La máquina escogió piedra. Ganaste.");
        puntajeUsuario++;
      } else if (jugadaMaquina === 1) {
        alert("La máquina escogió papel. Empate.");
      } else if (jugadaMaquina === 2) {
        alert("La máquina escogió tijeras. Perdiste.");
        puntajeMaquina++;
      }
      break;

    case 2:
      if (jugadaMaquina === 0) {
        alert("La máquina escogió piedra. Perdiste.");
        puntajeMaquina++;
      } else if (jugadaMaquina === 1) {
        alert("La máquina escogió papel. Ganaste.");
        puntajeUsuario++;
      } else if (jugadaMaquina === 2) {
        alert("La máquina escogió tijeras. Empate.");
      }
      break;

      default: console.log("error")
  }
}

if (puntajeUsuario > puntajeMaquina) {
  alert("Felicitaciones por ganar.");
} else if (puntajeMaquina > puntajeUsuario) {
  alert("Haz perdido. La máquina ganó.");
} else if (puntajeMaquina == puntajeUsuario) {
  alert("Han empatado.");
}
