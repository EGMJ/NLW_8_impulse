<p align="center"><img width="400" src="./images/logo-nlw-return.svg" alt=""></p>

---

<div align="center" >

  ### Capa do projeto

</div>
<p align="center"><img width="max-width" src="./images/capa.png" alt=""></p>

---

### Sobre o projeto :pencil:

Consiste em um **Widget** para os usuários reportarem um BUG, IDEIA ou OUTRO tipo de **feedback**. A aplicação foi implementada com a biblioteca `React`, para o desenvolvimento **Front-end**, `Node e Typescript` para o **Back-end** e a biblioteca `React Native` para a versão **Mobile**.
Na aplicação também é possível fazer uma **screenshot** da tela para ser enviado junto ao **feedback**, que, ao ser enviado, a aplicação notifica o desenvolvedor com um e-mail recebido na plataforma **Mailtrap**.

App em produção: [FeedGet](https://nlw-return-egmj.vercel.app/)

Layout do projeto desenvolvido no [Figma](https://www.figma.com/community/file/1102912516166573468).

---

### Principais tecnologias

- React JS
- Node JS
- Typescript
- React native
- Vite
- TailwindCSS

----

### Clone este repositório

Crie um diretório e siga os passos seguintes:

```bash
  # Entre na pasta criada
    cd meu-diretório

  # Clone o repositório
    git clone https://github.com/EGMJ/NLW_8_impulse.git
  
  # Entre no repositório
    cd NLW_8_impulse
```

### Executando a aplicação localmente

#### [Front-end:](./web/README.md)
```bash
  # Executando o projeto web
    
    # Entra no diretório 
    $ cd web 
    
    # Instala as dependências
    $ yarn 
    
    # Executa
    $ yarn run dev 
```
```bash
  # Mensagem no terminal:
    vite v2.9.9 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 5944ms.
```
#### [Back-end:](./server/README.md)
```bash
  # Executando o servidor
    
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
    # Compila e cria a pasta dist
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

#### [Mobile:](./mobile/README.md)
```bash
  
```

### Próximos passos para melhorar a aplicação:

- [ ] Temas dark(padrão) e light.
    - [ ] e alteração da cor primaria.
- [ ] Usar um serviço de email profissional.
- [ ] Aprimorar a mensagem de email.
- [ ] Dashboard de todos os feedbacks
    - [ ] Autenticação Firebase ou OAuth
- [ ] Validação de campos / erros
- [ ] Fazer um formulário de contato e/ou um tira duvidas como os dos bancos
- [ ] Criar o site Doctor Care e fazer ambos funcionarem juntos