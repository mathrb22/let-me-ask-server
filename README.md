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

Este repositório contém o código-fonte do **backend** do projeto **Let me ask**, desenvolvido durante a **NLW Agents (Next Level Week)** da [Rocketseat](https://github.com/Rocketseat). O projeto é uma API moderna construída com **Node.js**, **TypeScript** e **Fastify**, utilizando **PostgreSQL** com a extensão **pgvector** para suporte a vetores e operações de IA.

O sistema integra **agentes de IA**, **busca semântica** e **processamento de dados vetoriais** para fornecer respostas automáticas a perguntas de participantes durante transmissões ao vivo. Através do upload de trechos de áudio da transmissão, a IA realiza a transcrição, gera vetores semânticos do conteúdo e os armazena. Isso permite que o sistema utilize busca semântica para verificar se perguntas já foram respondidas e fornecer respostas contextualizadas automaticamente.

## 🎯 Objetivo

Criar uma solução inteligente para transmissões ao vivo onde perguntas dos participantes são respondidas automaticamente por uma inteligência artificial, utilizando:

- **Upload e transcrição** de trechos de áudio de transmissões ao vivo.
- **Geração e processamento de dados vetoriais** para armazenar o contexto semântico do que foi dito.
- **Busca semântica** para identificar se perguntas já foram respondidas com base no conteúdo transcrito.
- **Agente de IA** para fornecer respostas contextualmente relevantes e precisas.

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
        <img width="60" src="https://images.seeklogo.com/logo-png/39/1/fastify-logo-png_seeklogo-399412.png" alt="Fastify" title="Fastify"/>
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
    <td align="center" width="100">
      <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://play-lh.googleusercontent.com/bTpNtZ6rYYX2SeI-wC4cnr7MJnOh2hjtgYu3UIrSxE09lM3GPl_Uhf9_Ih2Smje2bc0V=w240-h480-rw" alt="Google Gemini API" title="Google Gemini API"/>
      </a>
      <span>Google Gemini API</span>
    </td>
    <td align="center" width="90">
      <a href="https://biomejs.dev/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://avatars.githubusercontent.com/u/140182603?v=4" alt="Biome" title="Biome"/>
      </a>
      <span>Biome</span>
    </td>
    <td align="center" width="90">
      <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
        <img width="60" src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxvHMT0riO5Ze2r4kAINc_2Sf3i_lhd_UyN3p_M0zbCTnlfDqa8Z.oTShpYDF75lO38ORwn3qN2SS1GkJALG9t8s-&format=source" alt="Docker" title="Docker"/>
      </a>
      <span>Docker</span>
    </td>
  </tr>
</table>

## ✨ Features

- **Gestão de Salas**:

  - Criação e listagem de salas para eventos.
  - Detalhamento de informações de uma sala específica.

- **Gestão de Perguntas**:

  - Envio de perguntas para uma sala.
  - Listagem de perguntas de uma sala.

- **Processamento de Áudio com IA**:

  - **Upload de Áudio**: Endpoint para enviar trechos de áudio (`chunks`) de uma transmissão ao vivo para uma sala específica.
  - **Transcrição Automática**: O áudio enviado é automaticamente transcrito para texto utilizando a API do **Google Gemini**.
  - **Geração de Vetores Semânticos**: A transcrição é processada para gerar _embeddings_ (vetores semânticos) que capturam o significado do texto.
  - **Armazenamento**: A transcrição e os vetores são salvos no banco de dados, associados à sala correspondente.
  - **Busca Semântica**: ao criar uma nova pergunta, o sistema usará a busca por similaridade no banco de vetores para encontrar os trechos da transcrição mais relevantes e, assim, verificar se a pergunta já foi respondida.

## 💿 Instalação e execução

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

**Pré-requisitos:**

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)
- Uma chave de API do [Google Gemini](https://aistudio.google.com/app/apikey)

**Passos:**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/mathrb22/let-me-ask-server.git
   cd let-me-ask-server
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto, copiando o exemplo de `.env.example`.
     ```bash
     cp .env.example .env
     ```
   - Abra o arquivo `.env` e preencha as variáveis:

     ```env
     # Porta da aplicação
     PORT=3333

     # URL de conexão com o banco de dados PostgreSQL
     DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"

     # Sua chave de API do Google Gemini
     GEMINI_API_KEY="SUA_CHAVE_DE_API_AQUI"
     ```

4. **Inicie o banco de dados com Docker:**

   - O comando abaixo irá iniciar um contêiner PostgreSQL com a extensão `pgvector`.

   ```bash
   docker-compose up -d
   ```

5. **Execute as migrações do banco de dados:**

   - Este comando aplicará as tabelas e configurações necessárias ao banco.

   ```bash
   npm run db:migrate
   ```

6. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

A API estará disponível em `http://localhost:3333`.

### Comandos úteis do banco de dados

- **Gerar uma nova migração** (após alterar um schema em `src/db/schema/`):
  ```bash
  npm run db:generate
  ```
- **Abrir o Drizzle Studio** (para visualizar e gerenciar o banco de dados):
  ```bash
  npm run db:studio
  ```

## 📂 Estrutura do projeto

O projeto está organizado da seguinte forma:

```
.
├── drizzle.config.ts   # Configuração do Drizzle ORM
├── docker-compose.yml  # Configuração do Docker para o banco de dados
├── package.json
├── biome.jsonc         # Configuração do Biome (linter e formatter)
├── tsconfig.json
└── src/
    ├── db/
    │   ├── connection.ts   # Conexão com o banco de dados (Drizzle)
    │   ├── migrations/     # Arquivos de migração do banco
    │   └── schema/         # Definições das tabelas do banco (schemas)
    │       ├── index.ts
    │       ├── rooms.ts
    │       ├── questions.ts
    │       └── audio-chunks.ts
    ├── http/
    │   ├── routes/         # Definição das rotas da API
    │   │   ├── create-room.ts
    │   │   ├── get-rooms.ts
    │   │   ├── create-question.ts
    │   │   └── upload-audio.ts
    │   └── server.ts       # Arquivo principal do servidor Fastify
    ├── services/
    │   └── gemini.ts       # Lógica de integração com a API do Gemini
    └── env.ts              # Validação de variáveis de ambiente com Zod
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
