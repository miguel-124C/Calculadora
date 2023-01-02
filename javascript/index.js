const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton=>{
    boton.addEventListener('click',()=>display.agregarNumero(boton.textContent));
});

botonesOperador.forEach(boton=>{
    boton.addEventListener('click', ()=> display.computar(boton.value));
});





