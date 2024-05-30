$(document).ready(function() {
$('#cartMenuToggle').click(function() {
$('#cartMenu').toggle();
});

$('.close-button').click(function() {
$('#cartMenu').hide();
});
});


function cargar(element) {
    const seleccion = document.getElementById('seleccion');
    const img = element.querySelector('img').src;
    const descripcion = element.querySelector('.descripcion').textContent;
    const precio = element.querySelector('.precio').textContent;

    document.getElementById('img').src = img;
    document.getElementById('modelo').textContent = descripcion;
    document.getElementById('precio').textContent = precio;

    seleccion.classList.add('mostrar');
    seleccion.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cerrar() {
    const seleccion = document.getElementById('seleccion');
    seleccion.classList.remove('mostrar');
}
