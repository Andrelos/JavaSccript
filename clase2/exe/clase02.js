//eventos

//1 - DOM
var btn = document.querySelector('#enviar');
var nombre = document.querySelector('input[name=nombre]');
var direccion = document.querySelector('input[name=dir]');


//2 - Escuchar eventos

btn.onclick = enviarForm;
nombre.onfocus = nombreFocus;
direccion.onfocus = direccionFocus;
nombre.onblur = nombreBlur

//3 definir Callbacks (funciones que se ejecutan)

function enviarForm(event){
	console.log('Formulario Enviado...', event);
}

function nombreFocus(){
	console.log('Llegue a nombre');
}

function direccionFocus(){
	console.log('Llegue a direccion');
}
 function nombreBlur(){
 	console.log('Sali!');

 }


//agregar al salir foco, consolelogmefui