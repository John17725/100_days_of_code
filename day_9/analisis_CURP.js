function validarEntidad (curp) {
	const enti_fed = ["AS","BC", "BS","CC","CS","CH","CL", "CM", "DF", "CX", "DG","GT","GR","HG","JC","MC","EM","MN","MS","NT","NL","OC","PL","QT","QR","SP","SL","SR","TC","TS","TL","VZ","YN","ZS"]
	let entidad = curp.substring(11, 13)
	//console.log(enti_fed[0]);
	switch (entidad) {
		case enti_fed[0]:
			return "Perteneces al estado de Aguascalientes"
			break;
		case enti_fed[1]:
			return "Perteneces al estado de Baja California"
			break;
		case enti_fed[2]:
			return "Perteneces al estado de Baja california sur"
			break;
		case enti_fed[3]:
			return "Perteneces al estado de Campeche"
			break;
		case enti_fed[4]:
			return "Perteneces al estado de Chiapas"
			break;
		case enti_fed[5]:
			return "Perteneces al estado de Chihuahua"
			break;
		case enti_fed[6]:
			return "Perteneces al estado de Coahuila"
			break;
		case enti_fed[7]:
			return "Perteneces al estado de Colima"
			break;
		case enti_fed[8]:
		case enti_fed[9]:
			return "Perteneces a la Ciudad de Mexico antes DF"
			break;
		case enti_fed[10]:
			return "Perteneces al estado de Durango "
			break;
		case enti_fed[11]:
			return "Perteneces al estado de Guanajuato"
			break;
		case enti_fed[12]:
			return "Perteneces al estado de Guerrero"
			break;
		case enti_fed[13]:
			return "Perteneces al estado de Hidalgo"
			break;
		case enti_fed[14]:
			return "Perteneces al estado de Jalisco"
			break;
		case enti_fed[15]:
		case enti_fed[16]:
			return "Perteneces al estado de Mexico"
			break;
		case enti_fed[17]:
			return "Perteneces al estado de Michoacan"
			break;
		case enti_fed[18]:
			return "Perteneces al estado de Morelos"
			break;
		case enti_fed[19]:
			return "Perteneces al estado de Nayarit"
			break;
		case enti_fed[20]:
			return  "Perteneces al estado de Nuevo Leon"
			break;
		case enti_fed[21]:
			return "Perteneces al estado de Oaxaca"
			break;
		case enti_fed[22]:
			return "Perteneces al estado de Puebla"
			break;
		case enti_fed[23]:
			return "Perteneces al estado de Queretaro"
			break;
		case enti_fed[24]:
			return "Perteneces al estado de Quintana Roo"
			break;
		case enti_fed[25]:
			return "Perteneces al estado de San Luis Potosi"
			break;
		case enti_fed[26]:
			return "Perteneces al estado de Sinaloa"
			break;
		case enti_fed[27]:
			return "Perteneces al estado de Sonora"
			break;
		case enti_fed[28]:
			return "Perteneces al estado de Tabasco"
			break;
		case enti_fed[29]:
			return "Perteneces al estado de Tamaulipas"
			break;
		case enti_fed[30]:
			return "Perteneces al estado de Tlaxcala"
			break;
		case enti_fed[31]:
			return "Perteneces al estado de Veracruz"
			break;
		case enti_fed[32]:
			return "Perteneces al estado de Yucatan"
			break;
		case enti_fed[33]:
			return "Perteneces al estado de Zacatecas"
			break;
		default:
			return "NO SE ENCONTRARON COINCIDENCIAS"
			break;
	}
}

function ValidarEdad (curp) {
	let year_brith = curp.substring(4, 6)
	//console.log(year_brith)
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
		console.log("Edad:",edad,"\nEstas dentro de la ETAPA 1 de vacunacion correspondiente\n"+
			validarEntidad(CURP))
		
	}else{
		console.log("Tu edad ",edad," Determino que estas el la ultima etapa de vacunados\n"+
			validarEntidad(CURP))
	}
}


const CURP = "GOPJ290903HMCNRS01".toUpperCase()
stageVcuna(CURP)
