//Ej. jQuery

$(document).ready(init);

function init(){
	//Traemos via ajax el json
	$.get({url:'ejemplo.json'}).done(recibirDatos);

	//Recorro la coleccion y agrego los options al select
	function recibirDatos(data){
		$.each(data, function(index, item){
			var $opt = $(`<option value=${item.value}>${item.name}</option>`);
			$('select').append($opt);
		});
	}
}