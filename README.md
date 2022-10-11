# Parlador-Ideal
Uma aplicação web baseada em react que visa facilitar a troca de ideias libertárias no dia a dia dos colaboradores do grupo Atlas Shrugged.

## Bibliotecas/frameworks utilizados

Para o desenvolvimento da API foram utilizadas as seguintes bibliotecas/frameworks:

[![Express](https://img.shields.io/badge/Express.js-000?style=plastic&logo=express)](http://expressjs.com/)
[![JsonWebToken](https://img.shields.io/badge/jwt-000?style=plastic&logo=jsonwebtokens)](https://jwt.io/introduction/)
[![Bcrypt](https://img.shields.io/badge/bcrypt-000?style=plastic)](https://openbase.com/js/bcrypt/documentation)
[![Mongoose](https://img.shields.io/badge/Mongoose-000?style=plastic&logo=mongodb)](https://openbase.com/js/bcrypt/documentation)

## Getting Started

### Softwares requeridos

- Node
- MongoDB
- NPM ou YARN

### Instalação

Nossa aplicação utiliza o mongoDB como banco de dados, e já está configurado na aplicação, bastando apenas fornecer as credenciais necessárias do mongoDB nas variáveis de ambiente contidas no arquivo `.env` que você deverá criar.
>Caso não tenha o mongoDB instalado em sua máquina, durante a semana na qual enviarei o link desse repositório disponibilizarei credenciais temporárias para acesso ao banco em nuvem no atlas, bastando apenas salvar essas credenciais em `MONGODB_USER` & `MONGODB_PASSWORD`
### Setup Local

1. Para começar, clone o repositório executando o seguinte código no terminal da aplicação:
```shell
git clone git@github.com:bidwolf/parlador-ideal.git
```
2. Em seguida instale as dependências do projeto:
```bash
cd parlador-ideal
npm i
```
3. Adicione as variáveis de ambiente:
```json
PORT = 3333
MONGODB_USER =
MONGODB_PASSWORD = 
SECRET=
REFRESH_TOKEN_SECRET=
```
As credenciais acima são referentes as configurações necessárias para o funcionamento da api e conexão com o banco de dados.

* `PORT` é a porta na qual o servidor estará listado
* `MONGODB_USER` é o login de acesso para a conexão com o mongo pelo atlas (somente necessário se não houver o mongoDB instalado)
* `MONGODB_PASSWORD` é a senha de acesso para a conexão com o mongo
* `SECRET` é o segredo através do qual as senhas e os tokens de acesso serão codificados e decodificados pela aplicação
* `REFRESH_TOKEN_SECRET` faz o mesmo que o `SECRET` só que exclusivamente para os tokens responsáveis por atualizar os tokens de acesso (para que o usuário não precise ficar fazendo login repetidamente)

4. Execute a versão de desenvolvimento
```shell
npm run dev
```
5. Acesse a url criada:
```shell
http://localhost:3333
```
### Produção

Para executar a versão de deploy basta executar o comando 
`npm run build`