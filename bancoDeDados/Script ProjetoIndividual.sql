CREATE DATABASE TavernaDasLendas;
USE TavernaDasLendas;
-- DROP DATABASE TavernaDasLendas;

CREATE TABLE tipoDeJogador (
	idTipoDeJogador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(10)
);

CREATE TABLE sistema (
	idSistema INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20)
);

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255),
    fkTipoDeJogador INT,
    FOREIGN KEY (fkTipoDeJogador) REFERENCES tipoDeJogador (idTipoDeJogador),
    fkSistema INT,
    FOREIGN KEY (fkSistema) REFERENCES sistema (idSistema)
);

-- CREATE TABLE fichas (
--     idFichas INT PRIMARY KEY AUTO_INCREMENT,
--     nome VARCHAR(50),
--     antecedente VARCHAR(20),
--     tendencia VARCHAR(15),
--     classeNivel VARCHAR(50),
--     raca VARCHAR(50),
--     pontosDeExperiencia INT,
--     fkUsuario INT,
--     FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
-- );

-- CREATE TABLE atributos (
--     idAtributos INT PRIMARY KEY AUTO_INCREMENT,
--     forca INT,
--     destreza INT,
--     constituicao INT,
--     inteligencia INT,
--     sabedoria INT,
--     carisma INT,
--     proficiencia INT,
--     inspiracao INT,
--     fkFichas INT,
--     FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
-- );

-- CREATE TABLE dinheiro (
--     idDinheiro INT PRIMARY KEY AUTO_INCREMENT,
--     platina INT,
--     ouro INT,
--     elektron INT,
--     prata INT,
--     cobre INT,
--     fkFichas INT,
--     FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
-- );

-- CREATE TABLE personalidade (
--     idPersonalidade INT PRIMARY KEY AUTO_INCREMENT,
--     tracosDePersonalidade VARCHAR(150),
--     ideais VARCHAR(150),
--     ligacoes VARCHAR(150),
--     defeitos VARCHAR(150),
--     fkFichas INT,
--     FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
-- );

-- CREATE TABLE caracteristicas (
--     idCaracteristicas INT PRIMARY KEY AUTO_INCREMENT,
--     vida INT,
--     vidaTemporaria INT,
--     armadura INT,
--     deslocamento INT,
--     qtdDadosDeVida INT,
--     valorDadosDeVida INT,
--     fkFichas INT,
--     FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
-- );

INSERT INTO tipoDeJogador (nome) VALUES 
("Jogador"),
("Mestre"),
("Ambos");

INSERT INTO sistema (nome) VALUES
("Ordem paranormal"),
("Dungeons and Dragons"),
("Tormenta 20"),
("Outros");

INSERT INTO usuario (nome, email, senha, fkSistema, fkTipoDeJogador) VALUES
("Robert Ferreira", "robert.souza@sptech.school", "123456789", "1", "3");

-- Selects utilizados em fetchs

    SELECT * from tipoDeJogador;
    
    SELECT * from sistema;
    
    SELECT * FROM usuario;
    
    SELECT COUNT(fkSistema) AS "Quantidade total", 
            sistema.nome AS "Sistema escolhido" 
    FROM usuario 
        JOIN sistema ON fkSistema = idSistema 
    GROUP BY sistema.nome;

    SELECT COUNT(fkTipoDeJogador) AS "Quantidade total", 
            tipoDeJogador.nome AS "Tipo de jogador escolhido" 
    FROM usuario 
        JOIN tipoDeJogador ON fktipoDeJogador = idtipoDeJogador 
    GROUP BY tipoDeJogador.nome;

SHOW TABLES;