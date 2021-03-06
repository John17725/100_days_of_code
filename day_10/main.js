function min_to_hours(time){

}

function sum(a,b){
	return a + b
}

function sum_mins(acarreo, mins){
	if(acarreo >= 0 && acarreo <=60){
		let suma = sum(acarreo, mins);
		if (suma>60) {
			console.log(sum(acarreo, mins))
			return 1;
		}
	}
}

const hrs = [5.29,6.47]
var acarreo = 0;
for (let i = 0; i < hrs.length; i++) {
	console.log(hrs[i])
	let min = hrs[i].toString().substring(2,4)
	acarreo = sum_mins(parseInt(acarreo), parseInt(min));
	console.log(acarreo)
}