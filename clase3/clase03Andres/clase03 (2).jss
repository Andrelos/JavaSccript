//ajax

///////////////////////////////////////////////////////////////////////////////////////
var btn1 = document.querySelector('#btn1');

btn1.addEventListener('click',mostrarAjax);

function mostrarAjax(){
//window.funcionSecreta = hacerPedido; estando adentro hago que se vea. 

	

	hacerPedido("http://ip.jsontest.com/");
	hacerPedido("http://date.jsontest.com/");
	hacerPedido("http://localhost/clase03/datos.json"); //
	hacerPedido("http://www.sarasa.com.rt");
	hacerPedido("http://localhost/pepe/nov.html"); //esto hace que apache me tire html del error
}
///////////////////////////////////////////////////////////////////////////////////////

function hacerPedido(url){ //meto adentro esta funcion para no poder acceder desde window. / se puede probar desde consola que no voy a poder acceder
	var ajax = new XMLHttpRequest();
	ajax.addEventListener('load',mostrarRespuesta); //cuando el server responde se ejecuta este callback
	ajax.addEventListener('error',mostrarError);

	ajax.open('GET',url);
	ajax.send();

}
///////////////////////////////////////////////////////////////////////////////////////
var combo1 = document.querySelector('#combo1');
var combo2 = document.querySelector('#combo2');

combo1.addEventListener('change',agregarProvincia);

function agregarProvincia(){
	var ajax = new XMLHttpRequest();
	ajax.addEventListener('load',mostrarLoc); //cuando el server responde se ejecuta este callback
	

	ajax.open('GET','http://localhost/clase03/'+combo1.value+'.txt');
	ajax.send();

	function mostrarLoc(){
		//console.log(ajax.responseText);
		combo2.innerHTML=ajax.responseText;
	}

}
///////////////////////////////////////////////////////////////////////////////////////

var url ="http://ip.jsontest.com/";










function mostrarRespuesta(e){ //!== triple igualdad, iguala el tipo y el valor
	if(e.target.status!==200) mostrarError(e); // aca el target es del XMLHttpRequest que no seria un elemento del DOM
						 //status codido que responde el servidor
	
	console.log(e.target.responseText,e.target.status);
}

function mostrarError(e){
	console.error('Ups...',e);
}

///////////////////////////////////////////////////////////////////////////////////////