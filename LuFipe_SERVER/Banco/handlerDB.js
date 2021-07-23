//								//
//	  		Database			//
//								//
const sequelize = require('sequelize');
const dataBase = require('./bancoDados');

//								//
//		Multer Middleware		//
//								//
const multer = require('multer')

//
//PERFIL
//
const USUARIO = require('./usuarioDB');
const storagePerfil = multer.diskStorage({
	destination:(req, file, callback)=>{
		callback(null, './FrontEnd/IMAGENS/')
	},
	filename: (req, file, callback)=>{
		let extensao = file.originalname.split('.');
		let nomeArquivo = req.body.nome.replace(/ /g,'')
		callback(null, `${nomeArquivo}${Date.now()}.${extensao[1]}`)
	}
})
let uploadPerfil = new multer({storage: storagePerfil}).single('arquivo')

//
//POSTAGEM
//
const IMAGEM = require('./imagemDB');
const storagePost = multer.diskStorage({
	destination:(req, file, callback)=>{
		callback(null, './FrontEnd/IMAGENS/PROJETOS')
	},
	filename: (req, file, callback)=>{
		let extensao = file.originalname.split('.');
		let nomeArquivo = req.body.nome.replace(/ /g,'')
		callback(null, `${nomeArquivo}${Date.now()}.${extensao[1]}`)
	}
})
let uploadPost = new multer({storage: storagePost}).single('arquivo')

//
//INFO
//
const INFO = require('./infoDB');
const storageInfo = multer.diskStorage({
	destination:(req, file, callback)=>{
		callback(null, './FrontEnd/IMAGENS/INFO')
	},
	filename: (req, file, callback)=>{
		let extensao = file.originalname.split('.');
		let nomeArquivo = req.body.titulo.replace(/ /g,'')
		callback(null, nomeArquivo+Date.now()+'.'+extensao[1])
	}
})
let uploadInfo = new multer({storage: storageInfo}).single('arquivo')


					//								//
					//			  Models			//
					//								//
const { Console } = require('console');


					//								//
					//			 PERFIL				//
					//								//

//Criar PERFIL
module.exports.CreatePerfil = (req, res, next)=>{
	console.log("ENTRANDO NA CRIACAO DO USUARIO COM REQ= \n");
	console.log(req);
	uploadPerfil(req,res,()=>{
		console.log("\n\nINDO PARA ASSINCRONO\n\n")
		async function user(){
			console.log("\n\nDENTRO DA UNCAO ASSINCRONA COM REQ= \n");
			console.log(req);
			//Manilupação de erros para função assincrona
			try{
				//Teste de Sincronização com o banco de dados
				const CRUDBanco = await dataBase.sync();
				//console.log(CRUDBanco);

				console.log("\n\nCOMEÇANDO A CRIAR PERFIL\n\n")
				const criarCadastro = await USUARIO.create({
					NOME: req.body.nome,
					DESCRICAO: req.body.descricao,
					PERFIL: req.file.filename,
					STATUS: req.body.status,
					INSTITUTO: req.body.instituto,
					TEL: req.body.tel,
					CPF: req.body.cpf,
					RG: req.body.rg,
				})
				console.log("\n\nUSUARIO CADASTRADO: REQ\n\n")
				console.log(req)
				console.log(criarCadastro)
			}
			catch(err){
				console.log(err)
			}
		}
		user();
	})

}
//Ler PERFIL
module.exports.ReadPerfil = async ()=>{
	let usuario;

	//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();
		//console.log(CRUDBanco);

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
					//								//
					//		  	POSTAGEM			//
					//								//

//Criar POSTAGEM
module.exports.CreatePost = (req,res,next)=>{
	console.log("ENTRANDO NA CRIACAO DO POST COM REQ= \n");
	console.log(req);
	uploadPost(req,res,()=>{
		console.log("\n\nINDO PARA ASSINCRONO\n\n")
		async function post(){
			//Manilupação de erros para função assincrona
			try{
				//Teste de Sincronização com o banco de dados
				const CRUDBanco = await dataBase.sync();
				//console.log(CRUDBanco);
		
				console.log("\n\nCOMEÇANDO A CRIAR POST COM REQ= \n\n")
				console.log(req);
				const criarCadastro = await IMAGEM.create({
					NOME: req.body.nome,
					AUTOR: req.body.autor,
					DESCRICAO: req.body.descricao,
					TIPO: req.body.tipo,
					FILE: req.file.filename,
				})
				console.log("\n\nPOST CADASTRADO: REQ\n\n")
				console.log(req)
				console.log(criarCadastro)
			}
			catch(err){
				console.log(err)
			}
		}
		post();
	})
}
//Ler imagem
module.exports.ReadPost = async ()=>{
	let imagem;

	//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();
		//console.log(CRUDBanco);

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
					//			INFORMAÇÃO			//
					//								//

//Criar info
module.exports.CreateInfo = (req,res,next)=>{
	console.log("ENTRANDO NA CRIACAO DA INFORMAÇÃO COM REQ= \n");
	console.log(req);
	uploadInfo(req,res,()=>{
		console.log("\n\nINDO PARA ASSINCRONO\n\n")
		async function  info(){
			//Manilupação de erros para função assincrona
			try{
				//Teste de Sincronização com o banco de dados
				const CRUDBanco = await dataBase.sync();
				//console.log();
		
				console.log("\n\nCOMEÇANDO A CRIAR INFO\n\n")
				const criarCadastro = await INFO.create({
					TITULO: req.body.titulo,
					TIPO: req.body.tipo,
					NIVEL: Number(req.body.nivel),
					FILE: req.file.filename,
				})
				console.log("\n\nINFORMAÇÃO CADASTRADO: REQ\n\n")
				console.log(req)
				console.log(criarCadastro)
			}
			catch(err){
				console.log(err)
			}
		}
		info();
	})
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
	console.log("\n\nCOMEÇANDO A ENVIAR OS DADOS\n\n")
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