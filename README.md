# gerenciador-clinico
O projeto consiste em um sistema de gerenciamento clínico onde você consegue gerenciar clínicas, médicos, pacientes e seus prontuários sem unificar o paciente de uma clínica à outra. 
O projeto é simples e a ideia central é aprimorar meus conhecimentos em node.js e sequelize em um semi-case-real. Espero que goste do código que você está vendo. As rotas para consumo da API são essas: 

  ### Rotas do ADM geral
  - Uma rota que permite o auto-cadastro de uma clínica
    - **POST -> ip+porta+"/clinicas"**
  - Uma rota que permite a visualização de todas as clínicas
    - **GET -> ip+porta+"/clinicas"**
  - Uma rota que permite a visualização de uma única clínica
    - **GET -> ip+porta+"/clinicas/:idClinica"**
  - Uma rota que permite a edição de uma clínica específica
    - **PUT -> ip+porta+"/clinicas/:idClinica"**
  - Uma rota que permite a exclusão de uma clínica específica
    - **DELETE -> ip+porta+"/clinicas/:idClinica"**
  
  ### Rotas para o adm de uma clínica
  - Uma rota que permite o login de uma clínica e visualização de si
    - **GET -> ip+porta+"/app"**
  - Uma rota que permite a edição da clínica pós-login
    - **PUT -> ip+porta+"/app"**
  - Uma rota que permite a exclusão de dados da clínica pós-login
    - **DELETE -> ip+porta+"/app"**
    
  - Uma rota que permite o cadastro de um médico
    - **POST -> ip+porta+"/app/medicos"**
  - Uma rota que permite a visualização de todos os médicos da clínica
    - **GET -> ip+porta+"/app/medicos"**
  - Uma rota que permite a visualização de um médico da clínica
    - **GET -> ip+porta+"/app/medicos/:id_medico"**
  - Uma rota que edita um médico da clínica
    - **PUT -> ip+porta+"/app/medicos/:id_medico"**
  - Uma rota que apaga um médico da clínica
    - **DELETE -> ip+porta+"/app/medicos/:id_medico"**
    
  - Uma rota que cadastra um paciente vinculado ao médico e à clínica
    - **POST -> ip+porta+"/app/medicos/:id_medico/pacientes"**
  - Uma rota que possibilita a visualização de todos os pacientes cadastrados na clínica
    - **GET -> ip+porta+"/app/pacientes"**
  - Uma rota que possibilita a visualização de todos os pacientes cadastrados na clínica e vinculados à um médico
    - **GET -> ip+porta+"/app/medicos/:id_medico/pacientes"**
  - Uma rota que permite visualização de um paciente específico
    - **GET -> ip+porta+"/app/medicos/:id_medico/pacientes/:id_paciente"**
  
  
    
  
