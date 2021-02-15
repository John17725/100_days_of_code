/*Obtener el valor de una distancia en millas marinas y convertirlas a metros
	1 milla marina = 1852mts*/
function  getMeters(miles) {
	Distance_miles_in_mts = 1852; 
	return miles * Distance_miles_in_mts;
}

const a = getMeters(200)
console.log(a)

/*Multiplicacion sin signo de multiplicar*/

function multiply(numerador,denominador){
	let resultado = 0;
	for (var i = 0; i < denominador; i++) {
		resultado = resultado + numerador
	}
	return resultado
}

const b = multiply(10,10)
console.log(b)

/*Funcion que nos diga cuantos billetes/monedas tenemos que dar
por una cantidad de dinero introducida*/
//*Billetes
//1000
//500
//200
//100
//50
//20
//*Monedas
//10
//5
//2
//1
//.50
//.25*/

function getBilletes_1000 () {
	let contador = 0;
	while(aux > 1000){
		aux = aux - 1000
		contador++;
	}
	if (contador) {
		return contador;
	}else{
		return 0;	
	}
	
}

function getBilletes_500 () {
	let contador = 0;
	while(aux >=500 && aux <= 1000){
		aux = aux - 500
		contador++;
	}
	return contador;
}

function getBilletes_200 () {
	let contador = 0;
	while(aux >=200 && aux <= 400){
		aux = aux - 200
		contador++;
	}
	return contador;
}

function getBilletes_100 () {
	let contador = 0;
	while(aux >=100 && aux <= 200){
		aux = aux - 100
		contador++;
	}
	return contador;
}
function getBilletes_50 () {
	let contador = 0;
	while(aux >=50 && aux <= 99){
		aux = aux - 50
		contador++;
	}
	return contador;
}
function getBilletes_20 () {
	let contador = 0;
	while(aux >=20 && aux <= 49){
		aux = aux - 20
		contador++;
	}
	return contador;
}
function getMonedas_10 () {
	let contador = 0;
	while(aux >=10 && aux <= 19){
		aux = aux - 10
		contador++;
	}
	return contador;
}

function getMonedas_5 () {
	let contador = 0;
	while(aux >=5 && aux <= 9){
		aux = aux - 5
		contador++;
	}
	return contador;
}
function getMonedas_2 () {
	let contador = 0;
	while(aux >=2 && aux <= 4){
		aux = aux - 2
		contador++;
	}
	return contador;
}
function getMonedas_1 () {
	let contador = 0;
	while(aux >=1 && aux <= 1){
		aux = aux - 1
		contador++;
	}
	return contador;
}


function main (monto) {	
	return "La cantidad de: "+monto+
	" Se requieren los sigueintes billetes\n"+
	getBilletes_1000()+" de mil\n"+
	getBilletes_500()+" de 500\n"+
	getBilletes_200()+" de 200\n"+
	getBilletes_100()+" de 100\n"+
	getBilletes_50()+" de 50\n"+
	getBilletes_20()+" de 20\n"+
	"Y monedas de: \n"+
	getMonedas_10()+" de 10\n"+
	getMonedas_5()+" de 5\n"+
	getMonedas_2()+" de 2\n"+
	getMonedas_1()+" de 1"
}
var aux;
cantidad = 6435;
aux = cantidad;

console.log(main(cantidad))