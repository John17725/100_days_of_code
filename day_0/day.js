function getDesc(price,desc){
	price = price - (price * desc / 100)
	return price
}

function getIVA(price, IVA){
	price = price + (price * IVA / 100 )
	return price;
}

const carrito = [1900,16000,18000]
const desc = [18,10,5]
const IVA = 16
console.log("Carrito de compras: ")
for (let i = 0; i < carrito.length; i++) {
	console.log(carrito[i],desc[i])
}
console.log("Precio a pagar con descuento: ")
let total = new Array();
for (let i = 0; i < carrito.length; i++) {
	console.log(total[i] = getDesc(carrito[i],desc[i]))
}
console.log("Precio a pagar con IVA aplicado: ")
for (let i = 0; i < total.length; i++) {
	console.log(getIVA(total[i], IVA))
}