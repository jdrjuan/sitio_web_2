const parrafoFecha = document.getElementById('fecha');

if (parrafoFecha) {
    const fecha = new Date();
    parrafoFecha.innerHTML = 'Fecha actual: ' +fecha.toLocaleDateString();
}