//eventos

//1-posicioname en el DOM

var btn = document.querySelector('#enviar');
var nombre = document.querySelector('input[name=nombre]');

//2-eventos

btn.onclick = enviarForm;
nombre.onfocus = nombreFocus;

//3-callbacks -funcion que se ejecuta cuando sucede el evento

function enviarForm(event){
	console.log('Form enviado...',event);
}

fun nombreFocus(){
	console.log('llegue');