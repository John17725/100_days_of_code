function String_reve (string) {
	const separador = ""
	return string.split(separador).reverse()
}

var palabra = "Hola"
const a = String_reve(palabra)
console.log(a,palabra);
