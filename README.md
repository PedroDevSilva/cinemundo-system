Sistema de Cinema – Full Stack

Aplicação web full stack para gerenciamento de um sistema de cinema, permitindo visualizar, criar e manipular dados através de uma API REST integrada a uma interface web.

---

Sobre o Projeto

Este projeto simula um sistema de cinema com funcionalidades básicas de gerenciamento, incluindo cadastro de entidades, visualização de dados e operações CRUD completas.

A aplicação foi desenvolvida com foco em aprendizado prático de arquitetura web, separação de responsabilidades e integração entre frontend e backend.

---

Tecnologias Utilizadas

Frontend
- ReactJS
- Consumo de API REST
- Renderização dinâmica de dados

Backend
- Node.js
- Express
- Arquitetura em camadas:
  - routes
  - controllers
  - models

Banco de Dados
- SQL Server (ou compatível)
- Modelagem relacional com uso de chaves estrangeiras

---

Arquitetura do Projeto


ProjetoPratica
│
├── frontend
│ ├── public
│ └── src
│
├── backend
│ ├── routes # Rotas da API
│ ├── controllers # Lógica das requisições
│ ├── models # Acesso ao banco
│ └── server.js # Inicialização do servidor
│
└── database # Scripts SQL (schema + inserts)


---

Funcionalidades

O sistema permite:

- Visualizar registros (filmes, clientes, etc.)
- Criar novos dados
- Atualizar informações existentes
- Remover registros
- Comunicação completa entre frontend e backend via HTTP

---

Como Executar o Projeto

Clonar o repositório

No console:

git clone https://github.com/PedroDevSilva/cinemundo-system.git

Configurar o Backend:
cd backend
npm install

Crie um arquivo .env:

DB_USER=XXXXXX
DB_PASS=XXXXXX
DB_SERVER=XXXXXXX
DB_DATABASE=XXXXXX
DB_PORT=XXXX

Baixar dependencias do front:
cd frontend
npm install

Baixar dependencias da base:
na pasta raiz:
npm install

Execute os scripts SQL disponíveis na pasta /database.

API disponível em:

http://localhost:8081/{TABELA}

Exemplo de endpoint:

http://localhost:8081/filme


A aplicação estará disponível em:

http://localhost:3000
Comunicação Frontend - Backend

Rodar o projeto:
  npm run dev
  no console dentro do diretorio base do projeto (Já inicia back e depois front)

O frontend consome a API utilizando requisições HTTP para:

GET → buscar dados

POST → criar registros

PUT → atualizar dados(somente na api)

DELETE → remover registros (somente na api)

Imagens

Os posters dos filmes são armazenados localmente em:

/frontend/public/img

E referenciados no banco de dados via:

/img/nomeDoArquivo.webp
Limitações Atuais

O sistema ainda está em estágio inicial e possui limitações importantes:

 Não possui controle de sessões (horários de filmes)

 Ingressos não estão vinculados diretamente a exibições

 Não há autenticação de usuários

 Senhas não estão criptografadas

 Validações ainda são básicas

Possíveis Melhorias e Evoluções

  Modelagem de Cinema Real

  Implementação de Sala

  Implementação de Sessao (filme + horário + sala)

  Controle de assentos por sessão

Segurança

  Hash de senha com bcrypt

  Autenticação com JWT

  Controle de permissões

Pagamentos

  Integração com gateways de pagamento

  Histórico de transações

  Cancelamento e reembolso

Sistema Administrativo

  Dashboard

  Relatórios de vendas

  Controle de ocupação

Frontend

  Interface mais moderna

  Responsividade

  Melhor experiência do usuário (UX)

  Infraestrutura

  Deploy em nuvem

  Uso de CDN para imagens

  Armazenamento externo (S3 ou similar)

Objetivo do Projeto

  Este projeto foi desenvolvido com foco em:

  construção de APIs REST

  integração frontend/backend

  modelagem de banco de dados

  organização de código em camadas

  desenvolvimento de aplicações completas

Autores

  Pedro Silva

  Gabriel Fonseca

Estudantes de Desenvolvimento de Sistemas
