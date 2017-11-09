//JSON
var destino_barcelona = { destino: "BCN", origen: "BUE", aero:"LATAM", pax:30};
var destino_madrid = { 
	destino: "MAD", 
	origen: "BUE", 
	aero: "LATAM", 
	pax:45
};

var destinosEZE = {
	destinos : [],
	aeropuerto: "EZE",
	fecha: "10/11/2017",
	control: false
};

//Agrego elementos al array
destinosEZE.destinos.push(destino_barcelona);
destinosEZE.destinos.push(destino_madrid);

//Recorro el array y muestro la cantidad de pasajeros
/*destinosEZE.destinos.forEach(function(item){
	console.log('PAX:',item.pax);
});*/

//Mismo ejemplo en JSON puro
var destinosEZEv2 = {
	"aeropuerto": "EZE",
	"fecha": "10/11/2017",
	"control": false,
	"destinos": [
		destino_barcelona,
		destino_madrid
	]
};

//Serializar/Deserializar
var strDestinos = JSON.stringify(destinosEZEv2);
console.log(strDestinos);

destinosEZEv2.destinos[0].origen = "BRC";

var objDestinos = JSON.parse(strDestinos);
console.log(objDestinos);