let express = require('express');
let router = express.Router();
let path  =require('path')
let banco = require('../Banco/handlerDB');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("\n\nComeçaremos a pegar as informações do Banco de Dados:\n\n")

  let user = banco.ReadUsuario();
  console.log("\n\nInformações de Usuario"+JSON.stringify(user));

  let image = banco.ReadImagem();
  console.log("\n\nInformações de Imagem"+JSON.stringify(image));

  let inf = banco.ReadInfo();
  console.log("\n\nInformações de informações"+JSON.stringify(inf));
  
  console.log("\n\nInformações do BD foram pegas e serão repassadas:\n\n")
  console.log("\n\nSe preparando para renderizar:\n\n")
  res.render("ArchiViz_LuFipe",{'usuario': user, 'imagem': image, 'info': inf});
});

module.exports = router;
