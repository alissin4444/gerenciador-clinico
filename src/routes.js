const express = require('express');

const ClinicaController = require('./controllers/ClinicaController');
const MedicoController = require('./controllers/MedicoController');
const PacienteController = require('./controllers/PacienteController');

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

routes.post('/app/medicos', MedicoController.store);
routes.get('/app/medicos', MedicoController.index);
routes.get('/app/medicos/:id_medico', MedicoController.indexmedico);
routes.put('/app/medicos/:id_medico', MedicoController.updatemedico);
routes.delete('/app/medicos/:id_medico', MedicoController.deletemedico);

routes.post('/app/medicos/:id_medico/pacientes', PacienteController.store);
routes.get('/app/medicos/:id_medico/pacientes', PacienteController.indexpacientemedico);
routes.get('/app/medicos/:id_medico/pacientes/:id_paciente', PacienteController.indexpaciente);
routes.put('/app/medicos/:id_medico/pacientes/:id_paciente', PacienteController.updatepaciente);
routes.delete('/app/medicos/:id_medico/pacientes/:id_paciente', PacienteController.deletepaciente);
routes.get('/app/pacientes', PacienteController.indexpacienteclinica);



module.exports = routes;