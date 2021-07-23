let express = require('express');
let router = express.Router();
let path =require('path')
let banco = require('../Banco/handlerDB');


/* GET home page. */
router.get('/', banco.SendData);

/*Get pagina de criação de PERFIL(temporario) */
router.get('/usuario',
	(req,res,next)=>{
		res.render('usuario')
	}
)
router.post('/criarUsuario',
	(req,res,next)=>{
		console.log("\n\nEntrando para cadastrar usuario\n\n")
		banco.CreatePerfil(req, res, next);
		res.redirect('/');
	}
)

/*Get pagina de criação de POSTAGEM(temporario) */
router.get('/postagem',
	(req,res,next)=>{
		res.render('postagem')
	}
)
router.post('/criarPostagem',
	(req,res,next)=>{
		banco.CreatePost(req, res, next);
		res.redirect('/');
	}
)

/*Get pagina de criação de INFO(temporario) */
router.get('/informacao',
	(req,res,next)=>{
		res.render('informacao')
	}
)
router.post('/criarInformacao',
	(req,res,next)=>{
		banco.CreateInfo(req, res, next);
		res.redirect('/');
	}
)

module.exports = router;
