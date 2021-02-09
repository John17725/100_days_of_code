/* EJEMPLO DE FUNCION IMPURA */
var total = 0;

function suma_impure (num_1, num_2) {
	total = total + num_1 + num_2;
	return total;
}

/* EJEMPLO CORREGIDO DE LA FUNCION IMPURA Y QUE ES PURA */
function sumar_number (num_1, num_2) {
	return num_1 + num_2
}


/*LO QUE SUCEDE SI LLAMAMOS A UNA FUNCION IMPURA CON LOS MISMOS PARAMETROS*/
console.log('A = 2 \nB = 3\nLO QUE SUCEDE SI LLAMAMOS A UNA FUNCION IMPURA CON LOS MISMOS PARAMETROS')
console.log(suma_impure(2,3))
console.log(suma_impure(2,3))
console.log(suma_impure(2,3))
console.log(suma_impure(2,3))
console.log(suma_impure(2,3))
console.log('Notese que el resultado va cambiando conforme se va volviendo a llamar')
console.log('LO QUE SUCEDE SI LLAMAMOS A UNA FUNCION PURA CON LOS MISMOS PARAMETROS ANTERIORES')
console.log(sumar_number(2,3))
console.log(sumar_number(2,3))
console.log(sumar_number(2,3))
console.log(sumar_number(2,3))
console.log(sumar_number(2,3))
