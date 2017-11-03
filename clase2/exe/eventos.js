//eventos

//1 - DOM
var btn = document.querySelector('#enviar');

//2 - Escuchar eventos

btn.onclick = enviarForm;

//3 definir Callbacks (funciones que se ejecutan)

function enviarForm(){
	console.log('Formulario Enviado...');

}