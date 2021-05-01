

function contCreate(){
	//window.alert("Entrou a Função");
	//							//
	// DECLARAÇÃO DE VARIAVEIS	//
	// VARIAVEIS EXISTENTES		//
	//							//

	var n = 8; //numero de contwares
	var contVP = window.document.getElementById("contGrid_ID");

	///////////////////TEXTOS///////////////////////

	var titCont = ['LinkedIn','Blog', 'luizfelipecastrocoelho@gmail.com', 'Juazeiro do Norte - CE, Brasil', '@luizfelipecastrocoelho', '(88) 9 9916 - 5080', 'Currículo', 'Portfólio'];

	////////////////////////////////////////////////

	
	//VARIAVEIS CRIADAS			//

	var contCel = [];
	var contIMG = [];
	var contCONT = [];
	var contLv = [];
	var txtNode = [];

	//TAMANHO DOS ARRAYS//

	contCel.length = n;
	contIMG.length = n;
	contCONT.length = n;
	contLv.length = n;
	txtNode.length = n;

	//								//
	//	INICIALIZAÇÃO DE VARIAVEIS	//
	//								//


	for(var i =0;i<n;i++){

		//window.alert("Inicio loop Cont = " + i);

		contCel[i]=window.document.createElement("div");
		contIMG[i]=window.document.createElement("img");
		if((i==0)||(i==1)||(i==4)||(i==6)||(i==7)){
			contCONT[i]=window.document.createElement("a");
			switch(i){
				case 0:
					contCONT[i].href = "https://linkedin.com/in/luiz-coelho-a83711a5";
					break;
				case 1:
					contCONT[i].href = "https://luizfelipecastroco.wixsite.com/luizfelipecastrocoel";
					break;
				case 4:
					contCONT[i].href = "https://www.instagram.com/luizfelipecastrocoelho/";
					break;
				case 6:
					contCONT[i].href = "/images/Assets/Certificados/Currículo.pdf";
					break;
				case 7:
					contCONT[i].href = "/images/Assets/Certificados/PortFolio_PC.pdf";
					break;
				default:
			}
		} 
		else contCONT[i]=window.document.createElement("div");

		txtNode[i]=window.document.createTextNode(titCont[i]);

		//	ATRIBUIÇÃO DE CLASSES		//
		contCel[i].classList.add("contCel_CLASS");
		contIMG[i].classList.add("contIMG_CLASS");
		contCONT[i].classList.add("contCont_CLASS");

		//	PARENT DEFINITION			//
		contVP.appendChild(contCel[i]);

		contCel[i].appendChild(contIMG[i]);
		contCel[i].appendChild(contCONT[i]);


		//	INICIALIZAÇÃO DE VALORES	//
		contCONT[i].appendChild(txtNode[i]);
		contIMG[i].src = "/images/Assets/Contatos/"+i+".png";

	}
}