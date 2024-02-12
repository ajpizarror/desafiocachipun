/*
Usuario ingresa cantidad de veces que quiere jugar.
let cantidadJuegos = prompt "Ingrese cantidad de veces que quiere jugar";

Se definen puntajes de máquina y usuario a comparar para ver quien gana.
let puntajeMaquina = 0
let puntajeUsuario = 0

Comienza el ciclo for de jugada.
for (i = 0, i < cantidadJuegos, i++){

Usuario selecciona figura a jugar.
    let jugadaSeleccionada = prompt "Seleccione jugada: 0 = piedra; 1 = papel; 2 = tijeras."

Máquina selecciona figura aleatoriamente.
    let jugadaMaquina = Math.floor(Math.random()*3)

Comparación de jugadas

Si jugadaSeleccionada = 0 y jugadaMaquina = 0 (empate), 1 (pierde) puntajeMaquina++, 2 (gana) puntajeUsuario++.
Si jugadaSeleccionada = 1 y jugadaMaquina = 0 (gana) puntajeUsuario++, 1 (empate), 2 (pierde) puntajeMaquina++
Si jugadaSeleccionada = 2 y jugadaMaquina = 0 (pierde) puntajeMaquina++, 1 (gana) puntajeUsuario++, 2 (empate).
}

Comparación de puntajes finales.

Si puntajeUsuario > puntajeMaquina, alert (felicitaciones al usuario por ganar).
Si puntajUsuario < puntajeMaquina, alert (felicitaciones a la maquina por ganar).
Si puntajeUsuario === puntajeMaquina, alert (ha sido un empate).

*/