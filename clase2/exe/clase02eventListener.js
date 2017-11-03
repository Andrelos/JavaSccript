//eventListerners

var btn = document.querySelector('#enviar');
var nombre = document.querySelector('input[name=nombre]');
var direccion = document.querySelector('input[name=dir]');
var frm = document.querySelector('form');
var prov = document.querySelector('select');

//2 eventos,  evento sin on

btn.addEventListener('click', validar)
btn.addEventListener('click', enviarForm);
nombre.addEventListener('focus', nombreFocus);
nombre.addEventListener('blur', function(){
	console.log('sali de nombre');
})
frm.addEventListener('submit', validarfrm);//se puede usar Name tambien (frm)
prov.addEventListener('change', mostrarProv);
prov.addEventListener('change', validarProv);


/*
`hola ${nombre}`//ES6 Template Strings
*/


//3 callbacks
function enviarForm(event){
	console.log('Formulario Enviado...', event);
}

function validar(){

	console.log('valido form..')
	btn.removeEventListener('click', validar); //elimino referencia
}

function nombreFocus(){
	console.log('Llegue a nombre');

}

function mostrarProv(){
	console.log('prov', prov.value);

}

function validarProv(){
	if (prov.value != "" ) {
		return true;
	}else{
		console.error('ingrese una prov');
	}
}


function validarfrm(event){

	if ( prov.value != "" && nombre.value != "" && dir.value != "") {
		return true;
	}
	else{
		console.error('Los campos no pueden estar vacios');
		event.preventDefault();
	}	
}



//seguir fase inicial de laboratorio 2, validar campos formulario.
