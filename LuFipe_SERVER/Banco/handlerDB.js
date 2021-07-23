					//										//
					//				Database				//
					//					&					//
					//			Multer Middleware			//
const sequelize = require('sequelize');
const dataBase = require('./bancoDados');					
const multer = require('multer')
const USUARIO = require('./usuarioDB');
const IMAGEM = require('./imagemDB');
const INFO = require('./infoDB');

					//										//
					//		 		PERFIL					//
					//										//
					//			CONFIGURAR MULTER			//
					//			PARA PERFIL					//
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

					//			CRIAR						//
					//			PERFIL						//
module.exports.CreatePerfil = (req, res, next)=>{
	uploadPerfil(req,res,()=>{
		async function user(){

			//Manilupação de erros para função assincrona
			try{
			//Teste de Sincronização com o banco de dados
				const CRUDBanco = await dataBase.sync();

			//Criação de USUARIO
				const criarCadastro = await USUARIO.create({
				NOME:		req.body.nome,
				DESCRICAO:	req.body.descricao,
				PERFIL: 	req.file.filename,
				STATUS: 	req.body.status,
				INSTITUTO:	req.body.instituto,
				TEL:		req.body.tel,
				CPF:		req.body.cpf,
				RG:			req.body.rg,
				})
			//Verificação de Dados
				console.log(criarCadastro)
			}
			catch(err){
				console.log(err)
			}
		}
		//DECLARAÇÃO DA FUNÇÃO
		user();
	})
}

					//			LER							//
					//			PERFIL						//
module.exports.ReadPerfil = async ()=>{
	let usuario;

		//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();

		//Lendo todo o banco de dados
		const tabela = await USUARIO.findAll();
		usuario = tabela;
	}
	catch(err){
		console.log(err)
	}
		//PREPARANDO JSON PARA ENVIAR
	usuario = JSON.stringify(usuario);
	usuario = JSON.parse(usuario);
	return usuario;
}

					//										//
					//		 		POSTAGEM				//
					//										//
					//			CONFIGURAR MULTER			//
					//			PARA POSTAGEM				//
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

					//			CRIAR						//
					//			POSTAGEM					//
module.exports.CreatePost = (req,res,next)=>{
	uploadPost(req,res,()=>{
		async function post(){
			
			//Manilupação de erros para função assincrona
			try{
			//Teste de Sincronização com o banco de dados
				const CRUDBanco = await dataBase.sync();
		
			//Criação de POSTAGEM
				const criarCadastro = await IMAGEM.create({
				NOME:		req.body.nome,
				AUTOR:		req.body.autor,
				DESCRICAO:	req.body.descricao,
				TIPO:		req.body.tipo,
				FILE:		req.file.filename,
				})
			//Verificação de Dados
				console.log(criarCadastro)
			}
			catch(err){
				console.log(err)
			}
		}
		//DECLARAÇÃO DA FUNÇÃO
		post();
	})
}
					//			LER							//
					//			IMAGEM						//
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
		//PREPARANDO JSON PARA ENVIAR
	imagem = JSON.stringify(imagem);
	imagem = JSON.parse(imagem);
	return imagem;
}

					//										//
					//			   INFORMAÇÃO				//
					//										//
					//			CONFIGURAR MULTER			//
					//			PARA INFORMAÇÃO				//
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

					//			CRIAR						// 
					//			INFORMAÇÃO					//
module.exports.CreateInfo = (req,res,next)=>{
	uploadInfo(req,res,()=>{
		async function  info(){

			//Manilupação de erros para função assincrona
			try{
			//Teste de Sincronização com o banco de dados
				const CRUDBanco = await dataBase.sync();
		
			//Criação de INFO
				const criarCadastro = await INFO.create({
				TITULO:		req.body.titulo,
				TIPO:		req.body.tipo,
				NIVEL:		Number(req.body.nivel),
				FILE:		req.file.filename,
				})
			//Verificação de Dados
				console.log(criarCadastro)
			}
			catch(err){
				console.log(err)
			}
		}
		//DECLARAÇÃO DA FUNÇÃO
		info();
	})
}

					//			LER							//
					//			INFORMAÇÃO					//
module.exports.ReadInfo = async (req,res,next)=>{
	let info;

		//Manipulação de erro para função assincrona
	try{
		//Testar Sincronização com Banco de Dados
		const CRUDBanco = await dataBase.sync();

		//Lendo todo o banco de dados
		const tabela = await INFO.findAll();
		info = tabela;
	}
	catch(err){
		console.log(err)
	}
		//PREPARANDO JSON PARA ENVIAR
	info = JSON.stringify(info);
	info = JSON.parse(info);
	return info;
}

					//										//
					//			Send data					//
					//										//
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