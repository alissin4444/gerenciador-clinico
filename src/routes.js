const express = require('express');

const ClinicaController = require('./controllers/ClinicaController');

const routes = express.Router();

// ADM das clinicas
routes.get('/clinicas', ClinicaController.index);
routes.get('/clinicas/:idClinic', ClinicaController.indexclinic);
routes.post('/clinicas', ClinicaController.store);
routes.put('/clinicas/:idClinic', ClinicaController.updateclinic);
routes.delete('/clinicas/:idClinic', ClinicaController.deleteclinic);

// ADM de uma clínica
routes.get('/app', ClinicaController.app);
routes.put('/app', ClinicaController.update);
routes.delete('/app', ClinicaController.delete);

module.exports = routes;