CREATE DATABASE TavernaDasLendas;
USE TavernaDasLendas;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(255),
    senha VARCHAR(255)
);

CREATE TABLE fichas (
    idFichas INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    antecedente VARCHAR(20),
    tendencia VARCHAR(15),
    classeNivel VARCHAR(50),
    raca VARCHAR(50),
    pontosDeExperiencia INT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE atributos (
    idAtributos INT PRIMARY KEY AUTO_INCREMENT,
    forca INT,
    destreza INT,
    constituicao INT,
    inteligencia INT,
    sabedoria INT,
    carisma INT,
    proficiencia INT,
    inspiracao INT,
    fkFichas INT,
    FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
);

CREATE TABLE dinheiro (
    idDinheiro INT PRIMARY KEY AUTO_INCREMENT,
    platina INT,
    ouro INT,
    elektron INT,
    prata INT,
    cobre INT,
    fkFichas INT,
    FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
);

CREATE TABLE personalidade (
    idPersonalidade INT PRIMARY KEY AUTO_INCREMENT,
    tracosDePersonalidade VARCHAR(150),
    ideais VARCHAR(150),
    ligacoes VARCHAR(150),
    defeitos VARCHAR(150),
    fkFichas INT,
    FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
);

CREATE TABLE caracteristicas (
    idCaracteristicas INT PRIMARY KEY AUTO_INCREMENT,
    vida INT,
    vidaTemporaria INT,
    armadura INT,
    deslocamento INT,
    qtdDadosDeVida INT,
    valorDadosDeVida INT,
    fkFichas INT,
    FOREIGN KEY (fkFichas) REFERENCES fichas(idFichas)
);