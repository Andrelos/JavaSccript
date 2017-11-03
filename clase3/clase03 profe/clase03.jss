//AJAX
var btn = document.querySelector('button');
btn.addEventListener('click',dale);

var provincias = document.querySelector('#prov');
prov.addEventListener('change', pedirLocalidades);

function pedirLocalidades(){
	var ajax = new XMLHttpRequest();
	ajax.addEventListener('load', mostrarLoc);
	ajax.open('GET','./data/'+ prov.value +'.txt' );
	ajax.send();

	function mostrarLoc(){
		//console.log(ajax.responseText);
		document.querySelector('#loc').innerHTML = ajax.responseText;
	}
}

/************************************************/
function dale(){

	hacerPedido("http://ip.jsontest.com/");
	hacerPedido("http://date.jsontest.com/");
	hacerPedido("data.json");
	hacerPedido("http://www.ole.com.ar");
	hacerPedido("http://localhost/pepe/nov.html");

	function hacerPedido(url){
		var ajax = new XMLHttpRequest();
		ajax.addEventListener('load', mostrarRespuesta);
		ajax.addEventListener('error',mostrarError);
		ajax.open('GET', url);
		ajax.send();
	}

	function mostrarRespuesta(e){
		if(e.target.status !== 200) mostrarError(e);
		console.log(e.target.status, e.target.responseText);
	}

	function mostrarError(e){
		console.error('Upss...',e);
	}

}