function getEstatura(arr) {
	let estatura_inicial = arr.substring(0, 2);	
	return estatura_inicial;	
}

function getCantidadPastelillos(arr){
	let cant_pastelillos = arr.substring(2 , 6)
	return cant_pastelillos;
}

function getConsumption(arr,latest_element,estatura_inicial){
	console.log(estatura_inicial);
	let elemet_one = arr.substring(0, 1)
	if (elemet_one == 'C') {
		console.log(elemet_one);
		estatura_inicial += latest_element
		return estatura_inicial
		
	}
	if (elemet_one == 'D') {
		console.log(elemet_one);
		return estatura_inicial = estatura_inicial - latest_element;
	}
}

function getLatestELement(arr){
	let elemet_latest = arr.substring(1, 4)
	let result = elemet_latest.split(' ').join('')
	if (elemet_latest == '') {
		console.log('VACIO');
		return 0;
	}else {
		console.log(elemet_latest)	
		return result;
	}
}

var text = ["50 6","C 10", "C 3", "C 5", "D", "D", "C 7"];
var estatura_inicial = parseInt(getEstatura(text[0]));
var Pastelillos = parseInt(getCantidadPastelillos(text[0]));
var latest_element ;
var position_back;
console.log("Estatura Inicial: "+estatura_inicial);
console.log("Cantida de Pastelillos: "+Pastelillos);
for (var i = 1; i <= Pastelillos; i++) {
	latest_element = parseInt( getLatestELement(text[i]))
	estatura_inicial= parseInt( getConsumption(text[i],latest_element,estatura_inicial))
}
console.log('ESTATURA FINAL: '+ estatura_inicial);

