function createShowRoom(){
	//window.alert("ShowRoomCrreated");
	//Declaração e inicialização de variaveis//

	var showroom_VP = window.document.getElementById("showRoom_ID");
	var showRoom_IMG = window.document.createElement("img");

	//Determinação de Parentalidade//
	
	showroom_VP.appendChild(showRoom_IMG);

	//Determinando os ID's//

	showRoom_IMG.setAttribute("id", "showRoomIMG_ID");

	//Config IMG//

	showRoom_IMG.src = "/images/Assets/Projetos/Ambientes/0.jpg";
	showRoom_IMG.alt = "Broken Image";
	showRoom_IMG.onclick = function(){hideShowRoom()};


}
