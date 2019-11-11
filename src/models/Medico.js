const { Model, DataTypes } = require("sequelize");

class Medico extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      crm: DataTypes.INTEGER,
      especialidade: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      contato_celular: DataTypes.STRING,
      contato_telefone: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Clinica, { foreignKey: 'id_clinica', as: 'owner' });
  }

}

module.exports = Medico;