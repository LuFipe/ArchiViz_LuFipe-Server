const sequelize = require('sequelize');
const dataBase = require('./bancoDados')

const INFO = dataBase.define('INFO',
	{
		ID:{
			type: sequelize.INTEGER,
			allowNull: false,
			unique: true,
			autoIncrement: true,
			primaryKey: true
		},
		TITULO:{
			type: sequelize.STRING,
			allowNull: false,
			unique: true
		},
		TIPO:{
			type: sequelize.STRING,
			allowNull: false,
			unique: true
		},
		NIVEL:{
			type: sequelize.INTEGER,
			allowNull: false
		},
		FILE:{
			type: sequelize.STRING,
			allowNull: false,
			unique: true
		}
	}
)

module.exports = INFO;