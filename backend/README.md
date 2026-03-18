Projeto de API com Node.js, Express e SQL Server
=====Descrição=====

Este projeto foi desenvolvido para praticar 
a criação de uma API RESTful conectada a um banco de dados SQL Server (MSSQL).
A ideia foi organizar o código de forma mais próxima de um projeto real
 — com rotas, controllers, models e configurações separadas — para aprender como as partes se conectam entre si.

Não era obrigatório deixar a estrutura tão organizada, mas fizemos em conjunto assim justamente para entender melhor como o Express trabalha em conjunto com o banco e como lidar com múltiplas tabelas e arquivos.

====Estrutura de Pastas====
ProjetoPraticaAPI/
│
├── .env                     # Variáveis de ambiente (login e dados do banco)
├── package.json             # Dependências e scripts do projeto
├── node_modules/            # Pacotes instalados pelo npm
│
└── src/
    ├── server.js            # Ponto de entrada: inicia o servidor e conecta ao banco
    ├── app.js               # Configura o Express (middlewares, JSON, etc.)
    │
    ├── config/
    │   └── db.js            # Conexão com o banco MSSQL via dotenv
    │
    ├── models/              # Arquivos responsáveis por interagir com o banco
    │   └── usuarioModel.js  # Exemplo: faz SELECT, INSERT, UPDATE, DELETE no banco
    │
    ├── controllers/         # Onde ficam as regras das requisições
    │   └── usuarioController.js
    │
    └── routes/              # Define os endpoints (URLs) e chama os controllers
        └── usuarioRoutes.js

===Como funciona cada parte===
Pasta / Arquivo	Função Principal
server.js	Inicia o servidor e conecta ao banco usando as funções do db.js.
app.js	Cria a aplicação Express e define o uso de express.json() para receber dados em JSON.
config/db.js	Lê as variáveis do .env e cria a conexão com o banco MSSQL.
routes/	Define as rotas da API (ex: /Cliente, /Acesso etc.) e para onde cada uma direciona.
controllers/	Recebem as requisições da rota e chamam os métodos do model. Fazem a lógica de resposta.
models/	Executam os comandos SQL (SELECT, INSERT, UPDATE, DELETE).
.env	Contém as informações sensíveis (usuário, senha, servidor, nome do banco, porta etc.).

Exemplo de Fluxo/Funcionamento:

requisição PUT /Cliente/1:

Rota → Recebe a URL e chama editCliente do controller.

Controller → Pega o req.params.id e o req.body, e envia para o model.

Model → Executa a query SQL para atualizar o cliente.

Resposta → Retorna "Usuário atualizado com sucesso!".

Bibliotecas Utilizadas

Node.js

Express

dotenv

mssql (para conectar ao SQL Server)

PS: Poderiamos ter utilizado o nodemon para facilitar a reinicialização da hospedagem........

OBS:

A estrutura foi pensada para entender a divisão entre camadas de uma aplicação Node.js — como os dados saem do cliente, passam pelas rotas e controllers, e chegam até o banco.
Mesmo que o projeto pudesse ser mais simples, o foco foi aprender boas práticas e organização de código.

