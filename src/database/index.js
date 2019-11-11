const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Clinica = require('../models/Clinica');
const Medico = require('../models/Medico');
const Paciente = require('../models/Paciente');

const connection = new Sequelize(dbConfig);

Clinica.init(connection);
Medico.init(connection);
Paciente.init(connection);

Medico.associate(connection.models);
Paciente.associate(connection.models);

module.exports = connection;