## Back-end

### Principais tecnologias
- [Jest](https://jestjs.io/pt-BR/)
- [Prisma](https://www.prisma.io/)
- [Mailtrap](https://mailtrap.io/)
- [Express](https://expressjs.com/pt-br/)
- [Node JS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Nodemailer](https://nodemailer.com/about/)
- [Speedy Web Compiler](https://swc.rs/docs/getting-started) 

##### Banco de dados em desenvolvimento
- [SQLite](https://www.sqlite.org/index.html)
##### Banco de dados em produção
- [PostgreSQL](https://www.postgresql.org/)

> Foi hospedado na plataforma [Railway](https://railway.app/). 

### Executando localmente:

```bash
    # Entra no diretório 
    $ cd server 
    
    # Instala as dependências
    $ yarn

    # Executa o código não compilado
    $ yarn dev 
    
    # Cria as Migrations do banco de dados
    $ yarn prisma migrate dev 
    
    # Visualizar os dados no banco de dados
    $ yarn prisma studio 
```
```bash
# Mensagem no terminal:
    yarn run v1.22.19
    $ ts-node-dev src/server.ts
    [INFO] 19:54:09 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.8.4)
    HTTP server running

  # O localhost do servidor
    > Local: http://localhost:3333/feedbacks

```
```bash
    # Chama o tsc que compila e cria a pasta dist
    $ yarn build 
    
    # Executa o código compilado
    $ yarn start 
    
    # Cria as Migrations do banco de dados
    $ yarn prisma migrate dev 
    
    # Visualizar os dados no banco de dados
    $ yarn prisma studio 
```
```bash
  # Mensagem no terminal
    yarn run v1.22.19
    $ node dist/server.js
    HTTP server running
```
