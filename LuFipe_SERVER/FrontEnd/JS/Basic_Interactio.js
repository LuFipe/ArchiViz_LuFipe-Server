

function dspSobre(){
	//window.alert("Entrou Ab");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");

	soft.style.display = "none";
	hobby.style.display = "none";
	cont.style.display = "none";
	expGrad.style.display = "none";
	about.style.display = "block";
}
function dspSoft(){
	//window.alert("Entrou Soft");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");
	
	hobby.style.display = "none";
	cont.style.display = "none";
	about.style.display = "none";
	expGrad.style.display = "none";
	soft.style.display = "flex";
}
function dspHobby(){
	//window.alert("Entrou Hobby");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");
	
	cont.style.display = "none";
	about.style.display = "none";
	soft.style.display = "none";
	expGrad.style.display = "none";
	hobby.style.display = "flex";
}
function dspCont(){
	//window.alert("Entrou Cont");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");

	about.style.display = "none";
	soft.style.display = "none";
	hobby.style.display = "none";
	expGrad.style.display = "none";
	cont.style.display = "flex";
}

function dspExpGrad(){
	//window.alert("Entrou Ab");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");

	soft.style.display = "none";
	hobby.style.display = "none";
	cont.style.display = "none";
	about.style.display = "none";
	expGrad.style.display = "flex";
}

function dspAmbiente(){
	//window.alert("Entrou Ab");
	var vpAmbiente = window.document.getElementById("portfolioAmbientes_ID");
	var vpModelo = window.document.getElementById("portfolioModelos_ID");
	var vp3D = window.document.getElementById("portfolio3Dviews_ID");

	vpModelo.style.display = "none";
	vp3D.style.display = "none";
	vpAmbiente.style.display = "flex";
}

function dspModelo(){
	//window.alert("Entrou Ab");
	var vpAmbiente = window.document.getElementById("portfolioAmbientes_ID");
	var vpModelo = window.document.getElementById("portfolioModelos_ID");
	var vp3D = window.document.getElementById("portfolio3Dviews_ID");

	vp3D.style.display = "none";
	vpAmbiente.style.display = "none";
	vpModelo.style.display = "flex";
}

function dsp3DView(){
	//window.alert("Entrou Ab");
	var vpAmbiente = window.document.getElementById("portfolioAmbientes_ID");
	var vpModelo = window.document.getElementById("portfolioModelos_ID");
	var vp3D = window.document.getElementById("portfolio3Dviews_ID");

	vpAmbiente.style.display = "none";
	vpModelo.style.display = "none";
	vp3D.style.display = "flex";
}

function pegarIndiceID(ID){
	//Declaraçao de variaveis
	//window.alert("smk entrou");
	var identidade = ID;
	var ID_Number;

	//pegar o ID
	if(identidade.length <= 13) {
		ID_Number = identidade[identidade.length -1];
	}else{
		ID_Number = identidade[identidade.length -1];
		for(var i = identidade.length - 1,n = 2; i>12; i--, n++){
			ID_Number = identidade[identidade.length - n] + ID_Number;
		}
	}
	
	ID_Number = Number(ID_Number);
	return ID_Number
}

function dspShowRoom(pastaID, imgID){
	//window.alert("Entrou a função");
	var showRoomVP = window.document.getElementById("showRoom_ID");
	var showRoomIMG  =window.document.getElementById("showRoomIMG_ID");
	
	var indice = pegarIndiceID(imgID);	


	switch(pastaID){
		case 0:
			showRoomIMG.src = "./Assets/Projetos/Ambientes/"+indice+".jpg";
			break;
		case 1:
			showRoomIMG.src = "./Assets/Projetos/Modelos/"+indice+".jpg";
			break;
		default:
			window.alert("No image in this index");
	}

	showRoomVP.style.display = "grid";
}

function hideShowRoom(){
	var showRoomVP = window.document.getElementById("showRoom_ID");
	showRoomVP.style.display = "none";
}