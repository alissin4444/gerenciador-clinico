const Clinica = require("../models/Clinica");

module.exports = {
  async store(req, res) {
    try {
      const { 
        email, 
        senha,
        nome, 
        pais, 
        estado, 
        cidade, 
        rua, 
        numero_rua, 
        contato_celular, 
        contato_telefone
       } = req.body;

       const validaEmailIsNotAvailable = await Clinica.findAll({
        where: {
          email: email
        }
       });

       if(validaEmailIsNotAvailable == false) {
        const clinica = await Clinica.create({ 
          email, 
          senha,
          nome, 
          pais, 
          estado, 
          cidade, 
          rua, 
          numero_rua, 
          contato_celular, 
          contato_telefone
         });
    
        return res.status(200).json(clinica);
       }
       
      return res.status(200).json({ message: "Email não disponível" });

    } catch(err) {
      return res.status(200).json({ erro: err })
    }
  },

  async index(req, res) {
    try {
      const clinicas = await Clinica.findAll();
      return res.status(200).json(clinicas);
    } catch(err) {
      return res.status(400).json({ erro: err });
    }
  },

  async indexclinic(req, res) {
    try {
      const { idClinic } = req.params;
      const clinicas = await Clinica.findAll({
        where: {
          id: idClinic
        }
      });

      if(clinicas == false) {
        return res.status(400).json({ message: "Clínica não encontrada" });
      }
      return res.status(200).json(clinicas);
    } catch(err) {
      return res.status(400).json({ erro: err });
    }
  },

  async updateclinic(req, res) {
    try {
      const { idClinic } = req.params;
      const {
        email, 
        senha, 
        nome, 
        pais, 
        estado,
        cidade, 
        rua, 
        numero_rua,
        contato_celular,
        contato_telefone,
      } = req.body;

      const dbClinicData = await Clinica.findAll({
        where: {
          id: idClinic
        }
      });

      const newClinic = {};

      if(dbClinicData[0].email != email) { 
        const anotherClinic = await Clinica.findAll({
          where: {
            email
          }
        });
        if(anotherClinic == false) {
          newClinic.email = email
        }else if(anotherClinic[0].email != email) {
          newClinic.email = email
        }
      };

      if(dbClinicData[0].senha != senha) { newClinic.senha = senha};
      if(dbClinicData[0].nome != nome) { newClinic.nome = nome};
      if(dbClinicData[0].pais != pais) { newClinic.pais = pais};
      if(dbClinicData[0].estado != estado) { newClinic.estado = estado};
      if(dbClinicData[0].cidade != cidade) { newClinic.cidade = cidade};
      if(dbClinicData[0].rua != rua) { newClinic.rua = rua};
      if(dbClinicData[0].numero_rua != numero_rua) { newClinic.numero_rua = numero_rua};
      if(dbClinicData[0].contato_celular != contato_celular) { newClinic.contato_celular = contato_celular};
      if(dbClinicData[0].contato_telefone != contato_telefone) { newClinic.contato_telefone = contato_telefone};

      await Clinica.update(
        newClinic,
        { 
          where: { id: idClinic } 
        }  
      );

      const newClinicaData = await Clinica.findAll({
        where: {
          id: idClinic
        }
      })
      
      res.status(200).json({ message: 'Clínica alterada com sucesso', clinica: newClinicaData[0] });
    } catch(err) {
      return res.status(400).json({ message: err });
    }
  },

  async deleteclinic(req, res) {
    try {
      const { idClinic } = req.params;

      await Clinica.destroy({
        where: {
          id: idClinic
        }
      })

      return res.status(200).json({ message: "Clínica apagada com sucesso"})
    } catch(err) {
      return res.status(400).json({ error: err })
    }
  },

  async app(req, res) {
    try {
      const { email, senha } = req.body;

      if(!(email || senha)) {
        return res.status(200).json({ message: "Preencha todos os campos corretamente" })
      }

      const validaEntrada = await Clinica.findAll({
        where: {
          email: email
        }
      })
      
      if(validaEntrada == false) {
        return res.status(200).json({ message: "Email incorreto" });
      }

      if(validaEntrada[0].senha == senha) {
        return res.status(200).json({ 
          message: "Entrada realizada com sucesso",
          clinica: validaEntrada[0]
        });
      }
      return res.status(200).json({ message: "Senha incorreta" });
    } catch(err) {
      return res.status(400).json({ message: err });
    }
  },

  async update(req, res) {
    try {
      const { id, 
        email, 
        senha, 
        nome, 
        pais, 
        estado,
        cidade, 
        rua, 
        numero_rua,
        contato_celular,
        contato_telefone,
      } = req.body;

      const dbClinicData = await Clinica.findAll({
        where: {
          id
        }
      });

      const newClinic = {};

      if(dbClinicData[0].email != email) { 
        const anotherClinic = await Clinica.findAll({
          where: {
            email
          }
        });
        if(anotherClinic == false) {
          newClinic.email = email
        }else if(anotherClinic[0].email != email) {
          newClinic.email = email
        }
      };

      if(dbClinicData[0].senha != senha) { newClinic.senha = senha};
      if(dbClinicData[0].nome != nome) { newClinic.nome = nome};
      if(dbClinicData[0].pais != pais) { newClinic.pais = pais};
      if(dbClinicData[0].estado != estado) { newClinic.estado = estado};
      if(dbClinicData[0].cidade != cidade) { newClinic.cidade = cidade};
      if(dbClinicData[0].rua != rua) { newClinic.rua = rua};
      if(dbClinicData[0].numero_rua != numero_rua) { newClinic.numero_rua = numero_rua};
      if(dbClinicData[0].contato_celular != contato_celular) { newClinic.contato_celular = contato_celular};
      if(dbClinicData[0].contato_telefone != contato_telefone) { newClinic.contato_telefone = contato_telefone};

      await Clinica.update(
        newClinic,
        { 
          where: { id } 
        }  
      );

      const newClinicaData = await Clinica.findAll({
        where: {
          id
        }
      })
      
      res.status(200).json({ message: 'Clínica alterada com sucesso', clinica: newClinicaData[0] });
    } catch(err) {
      return res.status(400).json({ message: err });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.body;

      await Clinica.destroy({
        where: {
          id
        }
      })

      return res.status(200).json({ message: "Clínica apagada com sucesso"})
    } catch(err) {
      return res.status(400).json({ error: err })
    }
  }
};