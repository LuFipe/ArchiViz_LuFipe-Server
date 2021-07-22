const sequelize = require('sequelize');
const dataBase = require('./bancoDados');
const USUARIO = require('./usuarioDB');
const IMAGE = require('./imagemDB');
const INFO = require('./infoDB');
const IMAGEM = require('./imagemDB');


//Manipulação de Usuario
module.exports.CreateUsuario = async (req, res, next)=>{}

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
	usuario = JSON.parse(usuario);
	return usuario;
}

//Manipulação de Imagem
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
	imagem = JSON.parse(imagem);
	return imagem;
}

//Manipulaçao de Informação
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
	info = JSON.parse(info);
	return info;
}