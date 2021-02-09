/* DUPLICAREMOS EL CONTENIDO DE UNA LISTA/ARRAY * 2 */
function duplicarLista(mi_lista) {
	let pos = 0;
	if (mi_lista.length == 1) {
		return mi_lista[pos]*2;
	}else{
		return mi_lista[pos]*2+duplicarLista(mi_lista[pos+1])
	}
}

var mi_lista = [1,2,3,4]
console.log(mi_lista.length == 1);