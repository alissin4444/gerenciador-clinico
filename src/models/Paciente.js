const { Model, DataTypes } = require("sequelize");

class Paciente extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sexo: DataTypes.BOOLEAN,
      nascimento_ano: DataTypes.INTEGER,
      cpf: DataTypes.STRING,
      contato_telefone: DataTypes.STRING,
      contato_celular: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Clinica, { foreignKey: 'id_clinica', as: 'owner' });
    this.belongsTo(models.Medico, { foreignKey: 'id_medico', as: 'doctor' });
  }

}

module.exports = Paciente;