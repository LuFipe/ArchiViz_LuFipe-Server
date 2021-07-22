const sequelize = require('sequelize')
const dataBase = require('./bancoDados')

const IMAGEM = dataBase.define('IMAGEM',
	{
		ID:{
			type: sequelize.INTEGER,
			allowNull: false,
			unique: true,
			autoIncrement:true,
			primaryKey: true

		},
		NOME:{
			type: sequelize.STRING,
			allowNull: false,
		},
		AUTOR:{
			type: sequelize.STRING,
			allowNull: false
		},
		DESCRICAO:{
			type: sequelize.STRING,
			allowNull: true
		},
		TIPO:{
			type: sequelize.STRING,
			allowNull: false,
		},
		FILE:{
			type: sequelize.STRING,
			allowNull: false,
			unique: true
		}
	}
)

module.exports = IMAGEM;