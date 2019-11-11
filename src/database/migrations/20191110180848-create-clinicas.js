'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('clinicas', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        pais: {
          type: Sequelize.STRING,
          allowNull: false
        },
        estado: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false
        },
        numero_rua: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        contato_celular: {
          type: Sequelize.STRING
        },
        contato_telefone: {
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
      return queryInterface.dropTable('clinicas');
  }
};
