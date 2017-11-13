
$(document).ready(init);

function init(){

	//console.log($('<strong>HOLA!</strong>'));

	var $elem = $('<strong>HOLA!</strong>');
	$('#contenedor').append($elem);
	
	$('#enviar').click(ejecutarBtn);
	
	$('#enviar').click(ejecutarBtn2);
	
	/*$('#cancelar').hover(function(){
		$('#enviar').trigger('click');
	});*/


	function ejecutarBtn(){
		console.log("btn!!!");
	}

	function ejecutarBtn2(){
		console.log("btn!!!222");
	}

	$('#cancelar').click(function(){
		$('#enviar')
		.hide(1000)
		.show(2000)
		.slideToggle(3000)
		.delay(1000)
		.show(2000);

		$('#cancelar')
		.hide(2000)
		.show(1000)
		.slideToggle(2000)
		.delay(4000)
		.show(2000);
	});

	$.ajax({url:'http://date.jsontest.com/'})
	.done(recibirDatos)
	.fail(error);
	
	function recibirDatos(data){
		console.log('servidor',data);
		console.log('servidor',data.milliseconds_since_epoch);

	}
	function error(){
		console.log('prorblemas en la red');
	}
}
