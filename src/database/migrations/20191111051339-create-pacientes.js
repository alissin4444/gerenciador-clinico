'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pacientes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_clinica: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'clinicas', 
          key: 'id',
        }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_medico: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'medicos', 
          key: 'id',
        }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sexo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      nascimento_ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contato_telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contato_celular: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false  
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false 
      }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('pacientes');
  }
};
