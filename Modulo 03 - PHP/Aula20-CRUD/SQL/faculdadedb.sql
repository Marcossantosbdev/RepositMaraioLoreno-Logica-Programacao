CREATE DATABASE faculdade;
use faculdade;

CREATE TABLE usuarios (
id int not null auto_increment primary key,
nome VARCHAR (20) not null,
sobrenome VARCHAR (100) not null,
email varchar (255) not null UNIQUE,
curso varchar (5) not null,
nota_atividade decimal (5,2) not null default 0,
nota_prova decimal (5,2) not null default 0,
nota_final decimal (5,2) not null default 0
);

select * from usuarios;