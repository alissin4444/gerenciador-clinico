const Clinica = require('../models/Clinica');
const Medico = require('../models/Medico');

module.exports = {
    async store(req, res) {
      try {
        const { 
          id, 
          nome, 
          cpf,
          crm,
          especialidade,
          email,
          senha,
          contato_telefone,
          contato_celular  
        } = req.body;

        const clinica = await Clinica.findAll({
          where: {
            id
          }
        })

        if(!clinica) {
          return res.status(400).json({ message: "Clínica inválida" });
        }

        const validaEmailIsNotAvailable = await Medico.findAll({
          where: {
            email: email
          }
         });
  
         if(validaEmailIsNotAvailable == false) {
          const medico = await Medico.create({
            id_clinica: id, 
            nome, 
            cpf,
            crm,
            especialidade,
            email,
            senha,
            contato_telefone,
            contato_celular
          });
      
          return res.status(200).json({ message: "Médico cadastrado com sucesso", medico });
         }
         
        return res.status(200).json({ message: "Email não disponível" });

      } catch(err) {
          return res.status(400).json({ erro: err })
      }
    },

    async index(req, res) {
      try {
        const { id } = req.body;
        const medicos = await Medico.findAll({
          where: {
            id_clinica: id
          }
        });

        return res.status(200).json({ medicos })
      } catch(err) {
        res.status(400).json({ erro: err })
      }
    },

    async indexmedico(req, res) {
      try {
        const { id_medico } = req.params;
        const { id } = req.body;

        const medico = await Medico.findAll({
          where: {
            id_clinica: id,
            id: id_medico
          }
        });

        if(medico == false) {
          return res.status(400).json({ message: "Não foi possível encontrar seu médico" })
        }

        return res.status(200).json(medico);

      } catch(err) {
        res.status(400).json({ erro: err })
      }
    },

    async updatemedico(req, res) {
      try {
        const { id_medico } = req.params;
        const { 
          id_clinica,
          nome, 
          cpf, 
          crm, 
          especialidade, 
          email, 
          senha, 
          contato_celular, 
          contato_telefone 
        } = req.body;

        const dbMedicoData = await Medico.findAll({
          where: {
            id: id_medico,
            id_clinica
          }
        });

        if(dbMedicoData == false) {
          return res.status(400).json({ message: "Médico não encontrado" });
        }
  
        const newMedico = {};
        
        if(email) {
          if(dbMedicoData[0].email != email) { 
            const anotherMedico = await Medico.findAll({
              where: {
                email
              }
            });
            if(anotherMedico != false) {
              return res.status(400).json({ message: "Email não disponível" })
            }
            if(anotherMedico == false) {
              newMedico.email = email
            }else if(anotherMedico[0].email != email) {
              newMedico.email = email
            }
          };
        }
  
        if(dbMedicoData[0].nome != nome) { newMedico.nome = nome};
        if(dbMedicoData[0].cpf != cpf) { newMedico.cpf = cpf};
        if(dbMedicoData[0].crm != crm) { newMedico.crm = crm};
        if(dbMedicoData[0].especialidade != especialidade) { newMedico.especialidade = especialidade};
        if(dbMedicoData[0].email != email) { newMedico.email = email};
        if(dbMedicoData[0].senha != senha) { newMedico.senha = senha};
        if(dbMedicoData[0].contato_celular != contato_celular) { newMedico.contato_celular = contato_celular};
        if(dbMedicoData[0].contato_telefone != contato_telefone) { newMedico.contato_telefone = contato_telefone};

        await Medico.update(
          newMedico,
          { 
            where: { 
              id_clinica,
              id: id_medico
            } 
          }  
        );

        const newMedicoData = await Medico.findAll({
          where: { 
            id_clinica,
            id: id_medico
          } 
        });

        return res.status(200).json({ message: "Médico editado com sucesso", medico: newMedicoData });

      } catch(err) {
        res.status(400).json({ erro: err })
      }
    },

    async deletemedico(req, res) {
      try {
        const { id_medico } = req.params;
        const { id_clinica } = req.body;

        const medico = await Medico.findAll({
          where: {
            id: id_medico,
            id_clinica
          }
        });

        if(medico == false) {
          return res.status(400).json({ message: "Médico não encontrado" });
        };

        await Medico.destroy({
          where: {
            id: id_medico, 
            id_clinica
          }
        });

        return res.status(200).json({ message: "Médico apagado com sucesso" });

      } catch(err) {
        res.status(400).json({ erro: err })
      }
    }

};