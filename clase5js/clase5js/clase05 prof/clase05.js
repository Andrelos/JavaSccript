//jQuery

$(document).ready(init);

function init(){
	//Ejemplos de posicionamiento en el DOM
	$('input').focus(function(e){
	console.log('focus',e.target)
	});

	//Crear HTML desde jQuery
	var $elem = $('<strong>HOLA jQuery!</strong>');
	$('#contenedor').append($elem);
	$('#contenedor').prepend($elem);

	//$('#contenedor').html(); //Muestra contenido
	//$('#contenedor').html("Mario"); //Pisa contenido

	//Css
	//$('#contenedor').css('color','green');

	//Clases CSS
	$('#contenedor').addClass('ok');

	//Eventos
	$('#enviar').click(ejecutarBtn);
	$('#enviar').click(ejecutarBtn2);

	//$('#cancelar').hover(function(){
	//	$('#enviar').trigger('click');
	//});

	function ejecutarBtn(){
		console.log('Btn!!');
	}

	function ejecutarBtn2(){
		console.warn('Btn!!!');
	}

	//Animaciones
	$('#cancelar').click(function(){
		$('#enviar')
		.hide(1000)
		.show(1000)
		.slideToggle(1000)
		.delay(1000)
		.show(1000);
	});

	//Ajax
	$.get({url:'http://date.jsontest.com/'})
		.done(recibirDatos)
		.fail(error);

	function recibirDatos(data){
		console.log('Servidor',data.time);
	}

	function error(){
		console.error('Problemas en la red');
	}

}