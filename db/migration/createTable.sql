create table Cliente (
	id int identity not null,
	CPF varchar(11) not null,
	nomeCompleto varchar(100) not null,
	dataAniversario date not null,
	enderecoCompleto varchar(200) not null,
	celular varchar(15) not null,
	email varchar(100) not null,
	senha varchar(100) not null,
	pagaMeiaEntrada bit not null,
	
	constraint pk_cliente primary key (id)
)

create table Acesso (
	id int identity not null,
	dataHora datetime not null,
	clienteId int not null,
	
	constraint pk_acesso primary key(id),
	constraint fk_acesso_cliente foreign key (clienteId) references Cliente(id)
)

create table Filme (
	id int identity not null,
	titulo varchar(200) not null,
	sinopse text not null,
	diretor varchar(100) not null,
	elenco text not null,
	classificacaoIndicativa varchar(20) not null,
	duracao int not null,
	poster varchar(200) not null,
	anoLancamento int not null,
	produtora varchar(100),
	
	constraint pk_filme primary key (id)
)

create table Genero (
	id int identity not null,
	nome varchar(30) not null,
	descricao varchar(50) not null,
	
	constraint pk_genero primary key (id)
)

create table Filme_genero (
	filmeId int not null,
	generoId int not null,
	
	constraint pk_filme_genero primary key (filmeId,generoId),
	constraint fk_filme foreign key (filmeId) references Filme (id),
	constraint fk_genero foreign key (generoId) references Genero (id)
)

create table FormaPagamento (
	id int identity not null,
	descricao varchar(50) not null,
	valorAcrescimo decimal(10,2) not null,
	
	constraint pk_formapagamento primary key (id)
)

create table Pagamento (
	id int identity not null,
	dataHora datetime not null,
	valorPago decimal(10,2) not null,
	formaPagamentoId int not null,
	
	constraint pk_pagamento primary key (id),
	constraint fk_pagamento_formapagamento foreign key (formaPagamentoId) references FormaPagamento (id)
)

create table Assento (
	id int identity not null,
	numCadeira int not null,
	numFileira int not null,
	
	constraint pk_assento primary key (id)
)

create table Ingresso (
	id int identity not null,
	numero varchar(10) not null,
	dataHora datetime not null,
	valorTotal decimal(10,2) not null,
	tipoIngresso varchar(20) check (tipoIngresso in ('INTEIRA','MEIA','BENEFICIO')),
	assentoId int not null,
	pagamentoId int not null,
	
	constraint pk_ingresso primary key (id),
	constraint fk_ingresso_assento foreign key (assentoId) references Assento (id),
	constraint fk_ingresso_pagamento foreign key (pagamentoId) references Pagamento (id)
)