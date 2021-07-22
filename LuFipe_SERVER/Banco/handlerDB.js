const sequelize = require('sequelize');
const dataBase = require('./bancoDados');
const USUARIO = require('./usuarioDB');
const INFO = require('./infoDB');
const IMAGEM = require('./imagemDB');

					//							//
					//	Manipulação de Usuario	//
					//							//

//Criar usuario
module.exports.CreateUsuario = async (req, res, next)=>{
	//Manilupação de erros para função assincrona
	try{
		//Teste de Sincronização com o banco de dados
		const CRUDBanco = await dataBase.sync();
		console.log(CRUDBanco);

		const criarCadastro = await USUARIO.create({
			NOME: req.body.nome,
			DESCRICAO: req.body.descricao,
			PERFIL: req.body.perfil,
			STATUS: req.body.status,
			INSTITUTO: req.body.instituto,
			TEL: req.body.tel,
			CPF: req.body.cpf,
			RG: req.body.rg,
		})
		console.log("\n\nUSUARIO CADASTRADO\n\n")
		console.log(criarCadastro)
	}
	catch(err){
		console.log(err)
	}
}
//Ler usuario
module.exports.ReadUsuario = async ()=>{
	let usuario;

	//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();
		console.log(CRUDBanco);

		//Lendo todo o banco de dados
		const tabela = await USUARIO.findAll();
		usuario = tabela;
	}
	catch(err){
		console.log(err)
	}
	usuario = JSON.stringify(usuario);
	console.log("\n\nEssa eh a informação quanto ao usuario q esta saindo do handler: \n"+usuario);
	usuario = JSON.parse(usuario);
	return usuario;
}
					//							//
					//	Manipulação de Imagem	//
					//							//

//Criar imagem
module.exports.CreateImage = async (req,res,next)=>{
	//Manilupação de erros para função assincrona
	try{
		//Teste de Sincronização com o banco de dados
		const CRUDBanco = await dataBase.sync();
		console.log();

		const criarCadastro = await IMAGEM.create({
			NOME: req.body.nome,
			AUTOR: req.body.autor,
			DESCRICAO: req.body.descricao,
			TIPO: req.body.tipo,
			FILE: req.body.file,
		})
		console.log(criarCadastro)
	}
	catch(err){
		console.log(err)
	}
}
//Ler imagem
module.exports.ReadImagem = async ()=>{
	let imagem;

	//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();
		console.log(CRUDBanco);

		//Lendo todo o banco de dados
		const tabela = await IMAGEM.findAll();
		imagem = tabela;
	}
	catch(err){
		console.log(err)
	}
	imagem = JSON.stringify(imagem);
	console.log("\n\nEssa eh a informação quanto a imagem q esta saindo do handler: \n"+imagem);
	imagem = JSON.parse(imagem);
	return imagem;
}
					//								//
					//	Manipulaçao de Informação	//
					//								//

//Criar info
module.exports.CreateInfo = async (req,res,next)=>{
	//Manilupação de erros para função assincrona
	try{
		//Teste de Sincronização com o banco de dados
		const CRUDBanco = await dataBase.sync();
		console.log();

		const criarCadastro = await INFO.create({
			TITULO: req.body.titulo,
			TIPO: req.body.tipo,
			FILE: req.body.file,
		})
		console.log(criarCadastro)
	}
	catch(err){
		console.log(err)
	}
}
//Ler info
module.exports.ReadInfo = async (req,res,next)=>{
	let info;

	//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();
		console.log(CRUDBanco);

		//Lendo todo o banco de dados
		const tabela = await INFO.findAll();
		info = tabela;
	}
	catch(err){
		console.log(err)
	}
	info = JSON.stringify(info);
	console.log("\n\nEssa eh a informação quanto a informação q esta saindo do handler: \n"+info);
	info = JSON.parse(info);
	return info;
}
					//								//
					//			Send data			//
					//								//

module.exports.SendData = async (req, res, next)=>{
	let usuario;
	let imagem;
	let info;
	let tabela;

	//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();
		console.log(CRUDBanco);

		//Lendo todo o banco de dados
		tabela = await USUARIO.findAll();
		usuario = tabela;

		//Lendo todo o banco de dados
		tabela = await IMAGEM.findAll();
		imagem = tabela;

		//Lendo todo o banco de dados
		tabela = await INFO.findAll();
		info = tabela;
	}
	catch(err){
		console.log(err)
	}

	//Dados de Usuario para enviar
	usuario = JSON.stringify(usuario);
	console.log("\n\nEssa eh a informação quanto ao usuario q esta saindo do handler: \n"+usuario);
	usuario = JSON.parse(usuario);

	//Dados de Imagem para enviar
	imagem = JSON.stringify(imagem);
	console.log("\n\nEssa eh a informação quanto a imagem q esta saindo do handler: \n"+imagem);
	imagem = JSON.parse(imagem);

	//Dados de Info para enviar
	info = JSON.stringify(info);
	console.log("\n\nEssa eh a informação quanto a informação q esta saindo do handler: \n"+info);
	info = JSON.parse(info);
	
	console.log("\nComeçando a Renderizar\n\n");
	res.render("ArchiViz_LuFipe",{'usuario': usuario, 'imagem': imagem, 'info': info});
	console.log("\n\nRenderizado\n");
	res.end();
}