Sistema de Cinema – Projeto Full Stack

Aplicação web completa para gerenciamento e visualização de informações de um sistema de cinema.

O projeto é composto por:

- Frontend: interface web simples para interação do usuário
- Backend: API REST responsável pelo processamento das requisições e comunicação com o banco de dados

A aplicação permite visualizar e manipular dados através de uma interface conectada a uma API estruturada seguindo padrões REST.

---

Tecnologias Utilizadas

Frontend

- ReactJS

Backend

- Node.js
- Express
- API REST

Banco de Dados

- SQL

---

Arquitetura do Projeto

O projeto possui uma arquitetura simples separando responsabilidades entre interface, lógica da aplicação e persistência de dados.

ProjetoPratica
│
├── frontend
│   ├─ public
│   └── src
│
├── backend
│   ├── routes
│   ├── controllers
│   ├── models
│   └── server.js
│
└── database

Essa separação facilita manutenção, evolução do sistema e organização do código.

---

Funcionalidades

O sistema permite:

- Visualizar dados através da interface web
- Enviar requisições para a API
- Criar registros
- Listar registros existentes
- Atualizar informações
- Remover registros do banco de dados

Toda comunicação entre frontend e backend ocorre através de requisições HTTP.

---

Como Executar o Projeto

Clonar o repositório

git clone https://github.com/PedroDevSilva/ProjetoPraticaAPI.git

---

Instalar dependências do backend

npm install

---

Configurar o banco de dados

Execute o script SQL disponível no projeto para criação das tabelas necessárias.

---

Iniciar o servidor

node server.js

O backend ficará disponível em:

http://localhost:3000

---

Executar o frontend

Abra o arquivo HTML principal do projeto no navegador ou utilize um servidor local.

---

Comunicação Frontend ↔ Backend

O frontend consome os endpoints da API utilizando requisições HTTP para:

- obter dados
- enviar novos registros
- atualizar informações
- excluir registros

---

Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de desenvolvimento web:

- criação de APIs REST
- integração frontend e backend
- manipulação de banco de dados
- estruturação de aplicações web
- comunicação cliente-servidor

---

Autor

Pedro Silva
Gabriel Fonseca
Estudantes de Desenvolvimento de Sistemas