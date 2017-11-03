//Eventos

//1 - DOM
var btn = document.querySelector('#enviar');
var nombre = document.querySelector('input[name=nombre]');
var dir = document.querySelector('input[name=dir]');

//2 - Eventos
btn.onclick = enviarForm;
nombre.onfocus = nombreFocus;
nombre.onblur = nombreBlur;
dir.onfocus = dirFocus;

//3 - Callbacks
function enviarForm(event){
	console.log('Formulario Enviado...', event);
}

function nombreFocus(){
	console.log('Llegue a nombre!');
}

function nombreBlur(){
	console.log('Sali de Nombre!');
}

function dirFocus(){
	console.log('Llegue a dir!')
}