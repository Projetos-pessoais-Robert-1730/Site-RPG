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

CREATE TABLE fichas (
    idFichas INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    antecedente VARCHAR(20),
    tendencia VARCHAR(15),
    classeNivel VARCHAR(50),
    raca VARCHAR(50),
    pontosDeExperiencia INT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
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

-- Verificação das tabelas:

SHOW TABLES;

DESC TABLE tipoDeJogador;

DESC TABLE sistema;

DESC TABLE usuario;

DESC TABLE fichas;

DESC TABLE dinheiro;

DESC TABLE personalidade;

DESC TABLE caracteristicas;

-- Primeiros Inserts (Obrigatório para a utilização da API de forma correta, pois serão as FKs da escolha do usuário no frontEnd)

INSERT INTO tipoDeJogador (nome) VALUES 
("Jogador"),
("Mestre"),
("Ambos");

INSERT INTO sistema (nome) VALUES
("Ordem paranormal"),
("Dungeons and Dragons"),
("Tormenta 20"),
("Outros");

-- Exemplo de criação de usuário Administrador 

INSERT INTO usuario (nome, email, senha, fkSistema, fkTipoDeJogador) VALUES
("Robert Ferreira", "robert.souza@sptech.school", "123456789", "1", "3");

-- Verificação dos Selects

    SELECT * from tipoDeJogador;
    
    SELECT * from sistema;
    
    SELECT * FROM usuario;

-- Selects utilizados em views

    SELECT nome, email, senha FROM Usuario;

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

-- Criação dos Views

    CREATE VIEW VerificacaoLogin AS SELECT nome, email, senha FROM usuario;

    CREATE VIEW QuantidadeSistemaGráfico AS SELECT COUNT(fkSistema) AS "Quantidade total", 
            sistema.nome AS "Sistema escolhido" 
        FROM usuario 
            JOIN sistema ON fkSistema = idSistema 
        GROUP BY sistema.nome; 

    CREATE VIEW QuantidadeTipoGráfico AS SELECT COUNT(fkTipoDeJogador) AS "Quantidade total", 
            tipoDeJogador.nome AS "Tipo de jogador escolhido" 
        FROM usuario 
            JOIN tipoDeJogador ON fktipoDeJogador = idtipoDeJogador 
        GROUP BY tipoDeJogador.nome;

-- Testando os views

    SELECT * FROM VerificacaoLogin WHERE nome = 'Robert Ferreira';

    SELECT * FROM QuantidadeSistemaGráfico;

    SELECT * FROM QuantidadeTipoGráfico;

-- Criando a procedure para Inserir Usuario

CREATE PROCEDURE InserirUsuario (
    IN nome VARCHAR(255),
    IN email VARCHAR(255),
    IN senha VARCHAR(255),
    IN fkSistema INT,
    IN fkTipoDeJogador INT
)
BEGIN
    INSERT INTO usuario (nome, email, senha, fkSistema, fkTipoDeJogador)
    VALUES (nome, email, senha, fkSistema, fkTipoDeJogador);
END;

-- Limpando a tabela usuario (Apenas o usuario administrador até o momento)
TRUNCATE TABLE usuario;

-- Testando o Procedure;

CALL InserirUsuario("Robert Ferreira", "robert.souza@sptech.school", "TotalmenteSegura@123", "1", "3");

-- Verificar sobre o call ou se usa o Insert msm pq se não seria como matar uma barata com escopeta