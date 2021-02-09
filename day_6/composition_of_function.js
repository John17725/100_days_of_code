/* FUNCION 1 AL CUADRADO RECIBE 1 PARAMETRO Y LO ELEVA AL CUADRADO */
function cuadrado (number) {
	return number * number; //Recordemos que un numero elevado por si mismo el resultado obtenido es cuadratico
}

/* FUNCION 2 SUMA DE CUADRADOS*/
function suma_cuadrados (num_1, num_2) {
	return cuadrado(num_1) + cuadrado(num_2);
}


/* FUNCION 3 CUADRADO ANTECESOR MAS EL SUCESOR DE 6 */
/* por lo tanto el antecesor de 6 es 5 y el sucesor 7
   entonces para obtener la suma cuadrada de los numeros
   que se obtienen de estos se lo pasamos a la suma de 
   los cuadrados y este obntendra el cuadrado mediante el
   llamado que hacen dentro de si mismo al cuadrado*/
function cuadradoantecesor_massucesor (numero) {
	return suma_cuadrados(numero-1, numero+1);
}

/*Entonces lo que sucede es que el cuadrado de 5 es 25
  y el cuadrado de 7 es 49 y sumados dan 74 obviamente
  el resultado va a variar al input*/
console.log(cuadradoantecesor_massucesor(6));