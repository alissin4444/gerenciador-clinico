const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Clinica = require('../models/Clinica');

const connection = new Sequelize(dbConfig);

Clinica.init(connection);

module.exports = connection;