$(document).ready(init);

function init(){

$.ajax({url:'provincias.json'})
	.done(recibirDatos)
	.fail(error);
	





	function recibirDatos(data){
		$.each(data, function(index,item){
			console.log(item);
			var $opt = $(`<option value=${item.value}>${item.name}</option>`);
			$('select').append($opt);

		});
		
		

	}
	function error(){
		console.log('prorblemas en la red');
	}

}