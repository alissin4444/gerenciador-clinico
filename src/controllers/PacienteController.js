const Clinica = require('../models/Clinica');
const Medico = require('../models/Medico');
const Paciente = require('../models/Paciente');

module.exports = {
  async store(req, res) {
    try {
      const { id_medico } = req.params;
      const { 
        id_clinica,
        nome,
        sexo,
        nascimento_ano,
        cpf,
        contato_telefone,
        contato_celular
      } = req.body;

      const medico = await Medico.findByPk(id_medico);
      
      if(medico == false) {
        return res.status(400).json({ message: "Médico não encontrado" });
      }

      const paciente = await Paciente.create({
        id_clinica,
        id_medico,
        nome,
        sexo,
        nascimento_ano,
        cpf,
        contato_telefone,
        contato_celular
      })

      return res.status(200).json({ message: "Paciente cadastrado com sucesso", paciente });

    } catch(err) {
      res.status(400).json({ erro: err })
    }
  },

  async indexpacientemedico(req, res) {
    try {
      const { id_clinica } = req.body;
      const { id_medico } = req.params;

      const paciente = await Paciente.findAll({
        where: {
          id_clinica,
          id_medico
        }
      })

      return res.status(200).json(paciente);
    } catch(err) {
      res.status(400).json({ erro: err })
    }
  },

  async indexpaciente(req, res) {
    try {
      const { id_paciente } = req.params;

      const paciente = await Paciente.findByPk(id_paciente);

      return res.status(200).json(paciente);
    } catch(err) {
      res.status(400).json({ erro: err })
    }
  },

  async updatepaciente(req, res) {
    try {

    } catch(err) {
      res.status(400).json({ erro: err })
    }
  },

  async deletepaciente(req, res) {
    try {

    } catch(err) {
      res.status(400).json({ erro: err })
    }
  },

  async indexpacienteclinica(req, res) {
    try {
      const { id_clinica } = req.body;

      const paciente = await Paciente.findAll({
        where: {
          id_clinica
        }
      })

      return res.status(200).json(paciente);

    } catch(err) {
      res.status(400).json({ erro: err })
    }
  },
};