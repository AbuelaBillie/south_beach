window.addEventListener("load", function () {
    // TRAEMOS INPUTS DATE
    const llegada = document.querySelector("#check-in-date");
    const partida = document.querySelector("#check-out-date");

    // QUE LA FECHA MINIMA SELECCIONABLE SEA HOY////////////
    llegada.min = new Date().toISOString().split("T")[0];
    partida.min = new Date().toISOString().split("T")[0];
    
})
