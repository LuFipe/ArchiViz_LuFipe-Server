



//função basica para pegar ID
/*
function pegarID(clicked_id){
	var identidade = clicked_id;
	var ID_Number;
	if(identidade.length <= 13) {
		ID_Number = identidade[identidade.length -1];
	}else{
		ID_Number = identidade[identidade.length -1];
		for(var i = identidade.length - 1,n = 2; i>12; i--, n++){
			ID_Number = identidade[identidade.length - n] + ID_Number;
		}
	}
	
	ID_Number = Number(ID_Number);

	window.alert("Tipo ID_Number = "+ typeof ID_Number+"\n valor de ID_Number = "+ ID_Number);
}
*/

//show SmokeScreen function
function showSmokeScreen(indice ,ID){
	//Declaraçao de variaveis
	//window.alert("smk entrou");
	var smkScr;
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

	//inicializaçao do SmokeScreen
	switch(indice){
		case 0:
			smkScr = window.document.getElementById("smokeScreenAmb_ID-"+ID_Number);
			break;
		case 1:
			smkScr = window.document.getElementById("smokeScreenMod_ID-"+ID_Number);
			break;
		default:
			window.alert("problema no smokeScrenn");
	}
	smkScr.style.display = "grid";
	//window.alert("smk terminou");
}

//hide SmokeScreen Function
function hideSmokeScreen(indice, ID){
	//Declaraçao de variaveis
	var smkScr;
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

	//inicializaçao do SmokeScreen
	switch(indice){
		case 0:
			smkScr = window.document.getElementById("smokeScreenAmb_ID-"+ID_Number);
			break;
		case 1:
			smkScr = window.document.getElementById("smokeScreenMod_ID-"+ID_Number);
			break;
		default:
			window.alert("problema no smokeScrenn");
	}
	smkScr.style.display = "none";
}


function portfolioAmbienteCreate(){
	//window.alert("Foi");



	//Declaração e inicialização de var para elementos fixos

				var portfolioAmbientes_VP  =window.document.getElementById("portfolioAmbientes_ID");

				//Declaração de variaveis para elementos criados
				var n = 12; //numero de posts
				var post = [];
				var smokeScreen = [];
				var titPost = [];
				var imgPerf = [];
				var authPost = [];
				var imgPost = [];
				var clicavel = []

				//Var textos
				var titulo = [];
				var autor = [];
				var nome;

				//Definição do tamanho de cada vetor
				post.length = n;
				smokeScreen.length = n;
				titPost.length = n;
				imgPerf.length = n;
				authPost.length = n;
				imgPost.length = n;
				clicavel.length = n;

				titulo.length = n;
				autor.length = n;

				//Infinitos titulos
				titulo[0] = window.document.createTextNode("Loft - Ext.");
				titulo[1] = window.document.createTextNode("Loft - Int.");
				titulo[2] = window.document.createTextNode("Loft - Int.");
				titulo[3] = window.document.createTextNode("Loft - Int.");
				titulo[4] = window.document.createTextNode("Yuugen-no-Ma");
				titulo[5] = window.document.createTextNode("Go Board");
				titulo[6] = window.document.createTextNode("Teclado");
				titulo[7] = window.document.createTextNode("Sala");
				titulo[8] = window.document.createTextNode("Forest Pack");
				titulo[9] = window.document.createTextNode("Casa na Arvore");
				titulo[10] = window.document.createTextNode("Casa Colonial");
				titulo[11] = window.document.createTextNode("RFFSA");




	for(var i = 0; i<n; i++){

		//Basic var text
		autor[i] = window.document.createTextNode("Luiz Felipe");

		// Inicializaçao de variaveis
		post[i] = document.createElement("div");
		smokeScreen[i] = document.createElement("div");
		titPost[i] = document.createElement("h1");
		imgPerf[i] = document.createElement("IMG");
		authPost[i] = document.createElement("h2");
		imgPost[i] = document.createElement("IMG");
		clicavel[i] = document.createElement("div")


		//Adicao de classes
		post[i].classList.add("post_CLASS");
		smokeScreen[i].classList.add("smokeScreen_CLASS");
		titPost[i].classList.add("titPost_CLASS");
		imgPerf[i].classList.add("imgPerf_CLASS");
		authPost[i].classList.add("authPost_CLASS");
		imgPost[i].classList.add("imgPost_CLASS");
		clicavel[i].classList.add("clicavel_CLASS");


		//Definição de parentalidade
		portfolioAmbientes_VP.appendChild(post[i]);


		post[i].appendChild(smokeScreen[i]);
		post[i].appendChild(imgPost[i]);
		post[i].appendChild(clicavel[i]);

		smokeScreen[i].appendChild(titPost[i]);
		smokeScreen[i].appendChild(imgPerf[i]);
		smokeScreen[i].appendChild(authPost[i]);


		//Definição do conteudo
		titPost[i].appendChild(titulo[i]);
		authPost[i].appendChild(autor[i]);

		imgPerf[i].src = "/images/Assets/Perfil.png";
		imgPost[i].src = "/images/Assets/Projetos/Ambientes/"+i+".jpg";
		imgPost[i].alt = "broken image";

		//Definiçao dos ID's

		post[i].id = "post_ID-"+i;
		smokeScreen[i].id = "smokeScreenAmb_ID-"+i;
		titPost[i].id = "titPost_ID-"+i;
		imgPerf[i].id = "imgPerf_ID-"+i;
		authPost[i].id = "authPost_ID-"+i;
		imgPost[i].id = "imgPost_ID-"+i;
		clicavel[i].id = "clicavel_ID-"+i;

		clicavel[i].onmouseover = function(){showSmokeScreen(0, this.id)}
		clicavel[i].onmouseout = function(){hideSmokeScreen(0, this.id)}
		clicavel[i].onclick = function(){dspShowRoom(0, this.id)};
	}
}

function portfolioModelosCreate(){
	//window.alert("Foi");



	//Declaração e inicialização de var para elementos fixos

	var portfolioModelos_VP  =window.document.getElementById("portfolioModelos_ID");
	var portfolio3DVeiws_VP  =window.document.getElementById("portfolio3DViews_ID");
	//Declaração de variaveis para elementos criados
	var n = 11; //numero de posts
	var post = [];
	var smokeScreen = [];
	var titPost = [];
	var imgPerf = [];
	var authPost = [];
	var imgPost = [];
	var clicavel = []

	//Var textos
	var titulo = [];
	var autor = [];
	var nome;

	//Definição do tamanho de cada vetor
	post.length = n;
	smokeScreen.length = n;
	titPost.length = n;
	imgPerf.length = n;
	authPost.length = n;
	imgPost.length = n;
	clicavel.length = n;

	titulo.length = n;
	autor.length = n;

	//Infinitos titulos
	titulo[0] = window.document.createTextNode("Areca Bambu");
	titulo[1] = window.document.createTextNode("Begonia Rex");
	titulo[2] = window.document.createTextNode("Lirio da Paz");
	titulo[3] = window.document.createTextNode("Palmeira Leque");
	titulo[4] = window.document.createTextNode("SVEVA Armchair");
	titulo[5] = window.document.createTextNode("HomeOffice - Desk");
	titulo[6] = window.document.createTextNode("NavyChair");
	titulo[7] = window.document.createTextNode("Teclado CT-S300");
	titulo[8] = window.document.createTextNode("Área Social");
	titulo[9] = window.document.createTextNode("Go Chair");
	titulo[10] = window.document.createTextNode("Gobam");




	for(var i = 0; i<n; i++){

		//Basic var text
		autor[i] = window.document.createTextNode("Luiz Felipe");

		// Inicializaçao de variaveis
		post[i] = document.createElement("div");
		smokeScreen[i] = document.createElement("div");
		titPost[i] = document.createElement("h1");
		imgPerf[i] = document.createElement("IMG");
		authPost[i] = document.createElement("h2");
		imgPost[i] = document.createElement("IMG");
		clicavel[i] = document.createElement("div")


		//Adicao de classes
		post[i].classList.add("post_CLASS");
		smokeScreen[i].classList.add("smokeScreen_CLASS");
		titPost[i].classList.add("titPost_CLASS");
		imgPerf[i].classList.add("imgPerf_CLASS");
		authPost[i].classList.add("authPost_CLASS");
		imgPost[i].classList.add("imgPost_CLASS");
		clicavel[i].classList.add("clicavel_CLASS");


		//Definição de parentalidade
		portfolioModelos_VP.appendChild(post[i]);


		post[i].appendChild(smokeScreen[i]);
		post[i].appendChild(imgPost[i]);
		post[i].appendChild(clicavel[i]);

		smokeScreen[i].appendChild(titPost[i]);
		smokeScreen[i].appendChild(imgPerf[i]);
		smokeScreen[i].appendChild(authPost[i]);


		//Definição do conteudo
		titPost[i].appendChild(titulo[i]);
		authPost[i].appendChild(autor[i]);

		imgPerf[i].src = "/images/Assets/Perfil.png";
		imgPost[i].src = "/images/Assets/Projetos/Modelos/"+i+".jpg";
		imgPost[i].alt = "broken image";

		//Definiçao dos ID's

		post[i].id = "post_ID-"+i;
		smokeScreen[i].id = "smokeScreenMod_ID-"+i;
		titPost[i].id = "titPost_ID-"+i;
		imgPerf[i].id = "imgPerf_ID-"+i;
		authPost[i].id = "authPost_ID-"+i;
		imgPost[i].id = "imgPost_ID-"+i;
		clicavel[i].id = "clicavel_ID-"+i;

		clicavel[i].onmouseover = function(){showSmokeScreen(1, this.id)}
		clicavel[i].onmouseout = function(){hideSmokeScreen(1, this.id)}
		clicavel[i].onclick = function(){dspShowRoom(1, this.id)};
	}
}