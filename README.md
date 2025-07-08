# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat. Ele é uma API para gerenciar agentes e salas, utilizando tecnologias modernas e boas práticas de desenvolvimento.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Fastify**: Framework web rápido e eficiente.
- **Zod**: Validação e tipagem de dados.
- **Drizzle ORM**: ORM para manipulação de banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **pgvector**: Extensão para suporte a vetores no PostgreSQL.
- **TypeScript**: Superset de JavaScript com tipagem estática.

## Padrões de Projeto

- **Arquitetura Modular**: Separação de responsabilidades em módulos como rotas, banco de dados e configuração.
- **Type Safety**: Uso extensivo de TypeScript e Zod para garantir segurança de tipos.
- **Migrations e Seeds**: Gerenciamento de esquema de banco de dados com Drizzle ORM.

## Configuração do Projeto

### Pré-requisitos

- Node.js 22.17.0
- PostgreSQL com a extensão `pgvector`

### Passos para Configuração

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd server
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados:

   - Certifique-se de que o PostgreSQL está rodando.
   - Crie um banco de dados chamado `agents` e habilite a extensão `pgvector`:
     ```sql
     CREATE EXTENSION IF NOT EXISTS vector;
     ```

4. Configure o arquivo `.env`:
   Copie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário:

   ```bash
   cp .env.example .env
   ```

5. Execute as migrações:

   ```bash
   npx drizzle-kit up
   ```

6. Popule o banco de dados com dados iniciais:

   ```bash
   npm run seed
   ```

7. Inicie o servidor:
   ```bash
   npm run dev
   ```

### Endpoints Disponíveis

- **GET /health**: Verifica o status do servidor.
- **GET /rooms**: Lista todas as salas.

## Scripts Úteis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run seed`: Reseta e popula o banco de dados.

## Licença

Este projeto é open-source e está sob a licença ISC.
