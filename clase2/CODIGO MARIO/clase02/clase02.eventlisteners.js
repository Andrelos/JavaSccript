//EventListeners

//1 - DOM
var btn = document.querySelector('#enviar');
var nombre = document.querySelector('input[name=nombre]');
var dir = document.querySelector('input[name=dir]');
var frm = document.querySelector('form');
var prov = document.querySelector('select');

//2 - Eventos
btn.addEventListener('click', validar);
btn.addEventListener('click', enviarForm);
nombre.addEventListener('focus', nombreFocus);
nombre.addEventListener('blur', function(){
	console.log('Sali de nombre');
}); //Funcion Anonima

frm.addEventListener('submit', validarFrm);
prov.addEventListener('change', selectChange);


/*
"Hola" + nombre;
'Hola' + nombre;
`Hola ${nombre}`; //ES6 - Template Strings
*/

//3 - Callbacks
function enviarForm(event){
	console.log(`Formulario Enviado...,`,event);
}

function validar(){
	console.log('Valido Form...');
	btn.removeEventListener('click',validar); //Elimino la referencia del callback
}

function nombreFocus(){
	console.log('Llegue a nombre!');
}

function validarFrm(event){
	if(nombre.value != "" && dir.value != "" && prov.value !=""){
		return true;
	}
	else{
		console.error('Los campos no pueden estar vacios');
		event.preventDefault();
	}
}

function selectChange(event){
	console.log('PROV:',prov.value,event);
}