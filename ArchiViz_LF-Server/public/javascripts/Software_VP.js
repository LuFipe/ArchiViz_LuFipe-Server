

function softCreate(){
	//							//
	// DECLARAÇÃO DE VARIAVEIS	//
	// VARIAVEIS EXISTENTES		//
	//							//

	var n = 8; //numero de softwares
	var softVP = window.document.getElementById("softGrid_ID");

	///////////////////TEXTOS///////////////////////

	var full = String.fromCharCode(0x26AB);
	var empty = String.fromCharCode(0x26AA);
	var titSoft = ['AutoCad','3DStudioMax', 'Unity3D', 'SubstancePainter', 'Photoshop', 'Illustrator', 'Premiere', 'C++'];
	//window.alert(full+full+full+full+empty);
	var level = [full+full+full+full+empty,
		full+full+full+full+empty,
		full+full+full+empty+empty,
		full+full+empty+empty+empty,
		full+full+full+empty+empty,
		full+full+full+empty+empty,
		full+empty+empty+empty+empty,
		full+empty+empty+empty+empty,
	];

	////////////////////////////////////////////////

	
	//VARIAVEIS CRIADAS			//

	var softCel = [];
	var softIMG = [];
	var softSOFT = [];
	var softLv = [];
	var txtNode = [];
	var lvNode = [];

	//TAMANHO DOS ARRAYS//

	softCel.length = n;
	softIMG.length = n;
	softSOFT.length = n;
	softLv.length = n;
	txtNode.length = n;
	lvNode.length = n;

	//								//
	//	INICIALIZAÇÃO DE VARIAVEIS	//
	//								//


	for(var i =0;i<n;i++){

		//window.alert("Inicio loop Soft = " + i);

		softCel[i]=window.document.createElement("div");
		softIMG[i]=window.document.createElement("img");
		softSOFT[i]=window.document.createElement("div");
		softLv[i]=window.document.createElement("div");
		txtNode[i]=window.document.createTextNode(titSoft[i]);
		lvNode[i]=window.document.createTextNode(level[i]);

		//	ATRIBUIÇÃO DE CLASSES		//
		softCel[i].classList.add("softCel_CLASS");
		softIMG[i].classList.add("softIMG_CLASS");
		softSOFT[i].classList.add("softSoft_CLASS");
		softLv[i].classList.add("softLv_CLASS");

		//	PARENT DEFINITION			//
		softVP.appendChild(softCel[i]);

		softCel[i].appendChild(softIMG[i]);
		softCel[i].appendChild(softSOFT[i]);
		softCel[i].appendChild(softLv[i]);
		
		//	INICIALIZAÇÃO DE VALORES	//
		softSOFT[i].appendChild(txtNode[i]);
		softLv[i].appendChild(lvNode[i]);
		
		softIMG[i].src = "/images/Assets/Softwares/"+i+".png";
		//softIMG.alt[i] = "Imagem nao avaliavel";
		//window.alert("Ponto loop Soft = " + i);
	}
}