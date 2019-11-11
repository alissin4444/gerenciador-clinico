'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('medicos', { 
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
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      crm: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
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
      return queryInterface.dropTable('medicos');
  }
};
