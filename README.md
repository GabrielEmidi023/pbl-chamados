# Sistema de Controle de Salas de Aula — PBL

Este é um projeto prático desenvolvido como solução para a avaliação de PBL (Project-Based Learning). O objetivo do sistema é gerenciar e cadastrar salas de aula de forma simples, aplicando conceitos de arquitetura de microsserviços, containerização com Docker e Integração Contínua (CI) com GitHub Actions.

##  Arquitetura e Tecnologias
O projeto foi estruturado utilizando a arquitetura de três camadas de forma totalmente isolada:
* **Banco de Dados:** PostgreSQL 15 (Alpine) para persistência dos dados.
* **Backend:** API REST desenvolvida em Node.js (Express) para gerenciamento das salas.
* **Frontend:** Interface Web simples construída em HTML5/CSS3 purificados e servida via servidor Nginx.
* **Infraestrutura:** Docker e Docker Compose para orquestração e isolamento dos serviços em rede local.
* **CI/CD:** Pipeline automatizada via GitHub Actions para validação de builds.

##  Como Executar o Projeto

Para rodar todo o ecossistema (Banco, API e Web) com apenas um comando, certifique-se de ter o **Docker** instalado em sua máquina e execute o comando abaixo na raiz do projeto:

```bash
docker compose up -d --build