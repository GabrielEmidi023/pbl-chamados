
CREATE TABLE salas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    capacidade INT NOT NULL
);

INSERT INTO salas (nome, capacidad) VALUES ('Laboratorio de Informatica 1', 30);
INSERT INTO salas (nome, capacidad) VALUES ('Sala de Aula 204 - Bloco B', 45);
INSERT INTO salas (nome, capacidad) VALUES ('Auditorio Principal', 120);