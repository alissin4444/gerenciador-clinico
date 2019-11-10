# gerenciador-clinico
O projeto consiste em um sistema de gerenciamento clínico onde você consegue gerenciar clínicas, médicos, pacientes e seus prontuários sem unificar o paciente de uma clínica à outra. 
O projeto é simples e a ideia central é aprimorar meus conhecimentos em node.js e sequelize em um semi-case-real. Espero que goste do código que você está vendo. As rotas para consumo da API são essas: 

  ## Rotas do ADM geral
  - Uma rota que permite o auto-cadastro de uma clínica
    - **POST -> ip+porta+"/clinicas"**
  - Uma rota que permite a visualização de todas as clínicas
    - **GET -> ip+porta+"/clinicas"**
  - Uma rota que permite a edição de uma clínica específica
  - Uma rota que permite a exclusão de uma clínica específica
  
  # Rotas para o adm de uma clínica
  - Uma rota que permite o login de uma clínica e visualização de si
    - **GET -> ip+porta+"/app"**
  - Uma rota que permite a edição da clínica pós-login
    - **PUT -> ip+porta+"/clinicas/:id"**
  - Uma rota que permite a exclusão de dados da clínica pós-login
    - **DELETE -> ip+porta+"/clinicas/:id"**
