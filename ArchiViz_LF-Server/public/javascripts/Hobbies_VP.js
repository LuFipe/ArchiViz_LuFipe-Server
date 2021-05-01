

function hobbyCreate(){
	//							//
	// DECLARAÇÃO DE VARIAVEIS	//
	// VARIAVEIS EXISTENTES		//
	//							//

	var n = 20; //numero de hobbies
	var hobbyVP = window.document.getElementById("hobbieGrid_ID");

	///////////////////TEXTOS///////////////////////

	var titHobby = ['Empreendimento','Economia', 'Mercado de Ações', 'Modelagem 3D', 'Ensinar', 'Tocar Piano', 'Escutar Musica', 'Filmes e Séries', 'Games', 'Sair com os amigos'];
	//window.alert(full+full+full+full+empty);

	////////////////////////////////////////////////

	
	//VARIAVEIS CRIADAS			//

	var hobbyCel = [];
	var hobbyIMG = [];
	var hobbyHOB = [];
	var txtNode = [];

	//TAMANHO DOS ARRAYS//

	hobbyCel.length = n;
	hobbyIMG.length = n;
	hobbyHOB.length = n;
	txtNode.length = n;

	//								//
	//	INICIALIZAÇÃO DE VARIAVEIS	//
	//								//


	for(var i =0;i<n;i++){

		//window.alert("Inicio loop Hobby = " + i);


		hobbyCel[i]=window.document.createElement("div");
		hobbyIMG[i]=window.document.createElement("img");
		hobbyHOB[i]=window.document.createElement("div");



		//	PARENT DEFINITION			//
		hobbyVP.appendChild(hobbyCel[i]);

		hobbyCel[i].appendChild(hobbyIMG[i]);
		hobbyCel[i].appendChild(hobbyHOB[i]);

		if((i%2)==0){

			var nInterno = i/2;
			txtNode[i]=window.document.createTextNode(titHobby[nInterno]);

			//	ATRIBUIÇÃO DE CLASSES		//
			hobbyCel[i].classList.add("hobbyCel_CLASS");
			hobbyIMG[i].classList.add("hobbyIMG_CLASS");
			hobbyHOB[i].classList.add("hobbyHobby_CLASS");

			//	INICIALIZAÇÃO DE VALORES	//
			hobbyHOB[i].appendChild(txtNode[i]);
			hobbyIMG[i].src = "/images/Assets/Hobbies/"+nInterno+".png";
			hobbyIMG[i].alt = "Imagem não avaliavel";
		}else{
			hobbyCel[i].classList.add("emptyHobbyCel_CLASS");
		}
	}
	//window.alert("End of loops");
}