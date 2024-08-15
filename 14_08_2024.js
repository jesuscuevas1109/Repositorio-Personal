function mostrarHora() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    window.alert(`Hora actual: ${horas}:${minutos}`);
}

function iniciarReloj() {
    mostrarHora();
    let ahora = new Date();
    let segundosHastaProximoMinuto = (60 - ahora.getSeconds()) * 1000;

    window.setTimeout(function() {
        mostrarHora();
        window.setInterval(mostrarHora, 60000);
    }, segundosHastaProximoMinuto);
}
mostrarHora()



