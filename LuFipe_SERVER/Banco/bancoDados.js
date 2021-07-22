const sequelize = require('sequelize');
const seqFile = new sequelize({
	dialect: 'sqlite',
	storage: './Banco/lufipeSite_DB.sqlite'
});

module.exports = seqFile;