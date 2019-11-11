const { Model, DataTypes } = require("sequelize");

class Clinica extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      nome: DataTypes.STRING,
      pais: DataTypes.STRING,
      estado: DataTypes.STRING,
      cidade: DataTypes.STRING,
      rua: DataTypes.STRING,
      numero_rua: DataTypes.INTEGER,
      contato_celular: DataTypes.STRING,
      contato_telefone: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Clinica;