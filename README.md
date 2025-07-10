<div align="center">

<h1>Let me ask - Backend</h1>

</div>
<div align="center">
   <a href="https://github.com/mathrb22">
      <img alt="Made by mathrb22" src="https://img.shields.io/badge/made%20by-mathrb22-yellow">
   </a>
   <a href="https://github.com/mathrb22/let-me-ask-server/commits/main">
      <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/mathrb22/let-me-ask-server">
   </a>
   <a href="https://github.com/mathrb22/let-me-ask-server/issues">
      <img alt="GitHub Issues" src="https://img.shields.io/github/issues/mathrb22/let-me-ask-server">
   </a>
   <a href="https://github.com/mathrb22/let-me-ask-server/pulls">
      <img alt="Pull Requests Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
   </a>
   <a href="https://github.com/mathrb22/let-me-ask-server/blob/main/LICENSE">
      <img alt="GitHub License" src="https://img.shields.io/github/license/mathrb22/let-me-ask-server">
   </a>
</div>

</br>
<div align="center">

[**Sobre**](#-sobre) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Objetivo**](#-objetivo) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Tecnologias e ferramentas**](#-tecnologias-e-ferramentas) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Features**](#-features) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Instalação e execução**](#-instalação-e-execução) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Estrutura do projeto**](#-estrutura-do-projeto) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Como contribuir**](#-como-contribuir) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Licença**](#-licença)

</div>

## 📃 Sobre

Este repositório contém o código-fonte do **backend** do projeto **Let me ask**, desenvolvido durante a **NLW Agents (Next Level Week)** da [Rocketseat](https://github.com/Rocketseat). O projeto é uma API moderna construída com **Node.js**, **TypeScript** e **Fastify**, utilizando **PostgreSQL** com extensão **pgvector** para suporte a vetores e operações de IA.

O sistema integra **agentes de IA**, **busca semântica** e **processamento de dados vetoriais** para fornecer respostas automáticas às perguntas dos participantes durante transmissões ao vivo. Com base na transcrição em tempo real da apresentação, a IA processa e armazena vetores semânticos dos assuntos abordados, permitindo que o sistema utilize busca semântica para verificar se perguntas já foram respondidas e fornecer respostas contextualizada automaticamente.

## 🎯 Objetivo

Criar uma solução inteligente para transmissões ao vivo onde perguntas dos participantes são respondidas automaticamente através de inteligência artificial, utilizando:

- **Transcrição em tempo real** de transmissões ao vivo
- **Processamento de dados vetoriais** para armazenar contexto semântico
- **Busca semântica** para identificar se perguntas já foram respondidas
- **Agente de IA** para fornecer respostas contextualmente relevantes

## 🚀 Tecnologias e ferramentas

<table>
  <tr>
    <td align="center" width="90">
      <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
      </a>
      <span>Node.js</span>
    </td>
    <td align="center" width="90">
      <a href="https://www.typescriptlang.org/">
        <img width="60" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
      </a>
      <span>TypeScript</span>
    </td>
    <td align="center" width="90">
      <a href="https://fastify.dev/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://fastify.dev/img/logos/fastify-white.svg" alt="Fastify" title="Fastify"/>
      </a>
      <span>Fastify</span>
    </td>
    <td align="center" width="90">
      <a href="https://orm.drizzle.team/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://avatars.githubusercontent.com/u/108468352?s=200&v=4" alt="Drizzle ORM" title="Drizzle ORM"/>
      </a>
      <span>Drizzle ORM</span>
    </td>
    <td align="center" width="90">
      <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="PostgreSQL" title="PostgreSQL"/>
      </a>
      <span>PostgreSQL</span>
    </td>
  </tr>
  <tr>
    <td align="center" width="90">
      <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="pgvector" title="pgvector"/>
      </a>
      <span>pgvector</span>
    </td>
    <td align="center" width="90">
      <a href="https://zod.dev" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://zod.dev/_next/image?url=%2Flogo%2Flogo-glow.png&w=640&q=100" alt="Zod" title="Zod"/>
      </a>
      <span>Zod</span>
    </td>
    <td align="center" width="90">
      <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker"/>
      </a>
      <span>Docker</span>
    </td>
    <td align="center" width="90">
      <a href="https://biomejs.dev/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://avatars.githubusercontent.com/u/140182603?v=4" alt="Biome" title="Biome"/>
      </a>
      <span>Biome</span>
    </td>
  </tr>
</table>

## ✨ Features

A API oferece as seguintes funcionalidades:

### Funcionalidades de IA (em desenvolvimento)

🚧 **Sistema de salas inteligentes:** Gerenciamento de salas com integração de IA<br/>
🚧 **Transcrição em tempo real:** Captura e processamento de áudio de transmissões ao vivo<br/>
🚧 **Processamento vetorial:** Armazenamento de dados semânticos para busca eficiente<br/>
🚧 **Busca semântica:** Identificação inteligente de respostas já fornecidas<br/>
🚧 **Agentes de IA:** Respostas automáticas contextualmente relevantes<br/>

### Salas (Rooms)

✅ `GET /rooms`: Obtém a lista de todas as salas ordenadas por data de criação.</br>
✅ `GET /health`: Endpoint de verificação de saúde da API.</br>

### Recursos do Sistema

✅ **Banco de dados PostgreSQL** com extensão **pgvector** para operações vetoriais</br>
✅ **Migrations automáticas** com Drizzle ORM</br>
✅ **Seed de dados** para desenvolvimento</br>
✅ **Docker Compose** para ambiente de desenvolvimento</br>
✅ **Validação de tipos** com Zod e fastify-type-provider-zod</br>
✅ **Formatação de código** com Biome</br>
✅ **CORS** configurado para desenvolvimento frontend</br>
✅ **Hot reload** em desenvolvimento</br>

## 🔧 Instalação e execução

Para baixar o código-fonte do projeto em sua máquina, primeiramente terá que ter instalado o [**Git**](https://git-scm.com/).
Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
git clone https://github.com/mathrb22/let-me-ask-server.git
cd nlw-agents/server
```

### Pré-requisitos

- [**Node.js**](https://nodejs.org/en/) (versão 18 ou superior)
- [**Docker**](https://www.docker.com/) e [**Docker Compose**](https://docs.docker.com/compose/)

### Instalação das dependências

```bash
npm install
```

### Configuração do ambiente

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"
```

### Executando o banco de dados

Inicie o container PostgreSQL com pgvector:

```bash
docker-compose up -d
```

### Migrações do banco de dados

Execute as migrações para criar as tabelas:

```bash
npm run db:migrate
```

### Seed do banco de dados (opcional)

Para popular o banco com dados de exemplo:

```bash
npm run db:seed
```

### Executando o projeto

#### Modo desenvolvimento (com hot reload):

```bash
npm run dev
```

#### Modo produção:

```bash
npm start
```

A API estará disponível em http://localhost:3333.

### Scripts disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot reload
- `npm start` - Executa em modo produção
- `npm run db:studio` - Abre o Drizzle Studio para visualizar o banco
- `npm run db:generate` - Gera novas migrações
- `npm run db:migrate` - Executa as migrações pendentes
- `npm run db:seed` - Popula o banco com dados de exemplo

### Verificando a instalação

Acesse http://localhost:3333/health para verificar se a API está funcionando corretamente.

## 📁 Estrutura do projeto

```
server/
├── docker/
│   └── setup.sql           # Script de inicialização do PostgreSQL
├── src/
│   ├── db/
│   │   ├── migrations/     # Migrações do banco de dados
│   │   ├── schema/         # Esquemas das tabelas
│   │   ├── connection.ts   # Conexão com o banco
│   │   └── seed.ts         # Script de seed
│   ├── http/
│   │   └── routes/         # Rotas da API
│   ├── env.ts              # Validação de variáveis ambiente
│   └── server.ts           # Configuração do servidor
├── docker-compose.yml      # Configuração do Docker
├── drizzle.config.ts       # Configuração do Drizzle ORM
└── package.json
```

## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## 📝 Licença

<a href="https://github.com/mathrb22/let-me-ask-server/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/mathrb22/let-me-ask-server">
</a>

Esse projeto está sob a licença **MIT**. Veja o arquivo _**LICENSE**_ para mais detalhes.

---

Desenvolvido com 💚 por <a href="https://github.com/mathrb22/">mathrb22</a>

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/matheus-ribeiro-dev" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:math.ribeiro.dev@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" style="margin-right: 2vw"/></a>
</div>
