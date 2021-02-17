function RECORRER_ENTIDAD (entidad) {
	for (var i = 0; i < entidad.length; i++) {
		return entidad[i]
	}
}

function ValidarEdad (curp) {
	let year_brith = curp.substring(4, 6)
	console.log(year_brith)
	const date = new Date();
	const year_now = date.getFullYear();
	let sub_year= year_now.toString().substring(2, 4)
	if (year_brith > sub_year && year_brith <= 99) {
		return year_now - (year_brith = "19" + year_brith)
	}if(year_brith >= "00" && year_brith <= sub_year){
		return year_now - (year_brith = "20" + year_brith)
	}
	
}

function stageVcuna (CURP) {
	let edad = ValidarEdad(CURP)
	if (edad >= 80) {
		console.log("Estas dentro de la ETAPA 1 de vacunacion correspondiente")
	}else{
		console.log("Tu edad ",edad," Determino que estas el la ultima etapa de vacunados")
	}
}

const enti_fed = ["AS","BC", "BS","CC","CS","CH","CL", "CM", "DF", "CX", "DG","GT","GR","HG","JC","MC","EM","MN","MS","NT","NL","OC","PL","QT","QR","SP","SL","SR","TC","TS","TL","VZ","YN","ZS"]
const CURP = "GOPJ990903HMCNRS01"
stageVcuna(CURP)