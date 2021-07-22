const sequelize = require('sequelize');
const dataBase = require('./bancoDados');

const USUARIO = dataBase.define('USUARIO',
{
	ID:{
		type: sequelize.INTEGER,
		allowNull: false,
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
	NOME:{
		type: sequelize.STRING,
		allowNull: false
	},
	DESCRICAO:{
		type: sequelize.STRING,
		allowNull: true,
	},
	PERFIL:{
		type: sequelize.STRING,
		allowNull: true
	},
	STATUS:{
		type: sequelize.STRING,
		allowNull: false
	},
	INSTITUTO:{
		type: sequelize.STRING,
		allowNull: false
	},
	TEL:{
		type: sequelize.STRING,
		allowNull: true
	},
	RG:{
		type: sequelize.STRING,
		allowNull: false,
		unique: true
	},
	CPF:{
		type: sequelize.STRING,
		allowNull: false,
		unique: true
	},
}
);

module.exports = USUARIO;