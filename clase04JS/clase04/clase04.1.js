//Ejemplo json

var provincias = [
	{"nombre":"BA","valor":"ba"},
	{"nombre":"SANTA FE","valor":"sanf"},
	{"nombre":"CORDOBA","valor":"cor"},
	{"nombre":"CORRIENTES","valor":"cortes"},
	{"nombre":"NEUQUEN","valor":"neu"}
];

var localidades = {
	"pais" : "Argentina",
	"locs" :[
		{
			"valor":"ba",
			"localidades":[
				{"valor":"lap","nombre":"LA PLATA"},
				{"valor":"mor","nombre":"MORON"},
				{"valor":"mdq","nombre":"MAR DEL PLATA"}
			]
		},
		{
			"valor":"sanf",
			"localidades":[
				{"valor":"ros","nombre":"ROSARIO"},
				{"valor":"raf","nombre":"RAFAELA"},
				{"valor":"arr","nombre":"ARROYO SECO"}
			]
		},
		{
			"valor":"cor",
			"localidades":[
				{"valor":"cor","nombre":"CORDOBA CAP"},
				{"valor":"vill","nombre":"VILLA CARLOS PAZ"},
				{"valor":"rio","nombre":"RIO CUARTO"}
			]
		}
	]
};

var localidades_alternativa = {
	"ba":{
		"localidades":[
			{"valor":"lap","nombre":"LA PLATA"},
			{"valor":"mor","nombre":"MORON"},
			{"valor":"mdq","nombre":"MAR DEL PLATA"}
		]
	},
	"sanf":{
		"localidades":[
			{"valor":"ros","nombre":"ROSARIO"},
			{"valor":"raf","nombre":"RAFAELA"},
			{"valor":"arr","nombre":"ARROYO SECO"}
		]
	},
	"cor":{
		"localidades":[
			{"valor":"cor","nombre":"CORDOBA CAP"},
			{"valor":"vill","nombre":"VILLA CARLOS PAZ"},
			{"valor":"rio","nombre":"RIO CUARTO"}
		]
	}
};

// 1 - DOM
var prov = document.querySelector("select[name=prov]");
cargarProvincias();
var selLoc = document.querySelector("select[name=loc]");

//2 - Eventos
prov.addEventListener('change', cargarLocalidades);

//3 - Callbacks

function cargarProvincias(){
	var optDefault = document.createElement("option");
	optDefault.value = "";
	optDefault.innerText = "Seleccione Prov";
	prov.appendChild(optDefault);

	provincias.forEach(function(item,index){
		var opt = document.createElement("option");
		opt.value = item.valor;
		opt.innerText = item.nombre;
		prov.appendChild(opt);
	});
}

/*function cargarLocalidades(){
	localidades.locs.forEach(function(item){
		if(prov.value == item.valor){
			selLoc.innerHTML = "";

			var optDefault = document.createElement("option");
			optDefault.value = "";
			optDefault.innerText = "Seleccione Localidad";
			selLoc.appendChild(optDefault);

			item.localidades.forEach(function(item){
				var opt = document.createElement("option");
				opt.value = item.valor;
				opt.innerText = item.nombre;
				selLoc.appendChild(opt);
			});
		}
	});
}*/

function cargarLocalidades(){
	var sel = localidades_alternativa[prov.value];
	selLoc.innerHTML = "";

	var optDefault = document.createElement("option");
	optDefault.value = "";
	optDefault.innerText = "Seleccione Localidad";
	selLoc.appendChild(optDefault);

	sel.localidades.forEach(function(item){
		var opt = document.createElement("option");
		opt.value = item.valor;
		opt.innerText = item.nombre;
		selLoc.appendChild(opt);
	});
}