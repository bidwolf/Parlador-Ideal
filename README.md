# Parlador-Ideal
Uma aplicação web baseada em react que visa facilitar a troca de ideias libertárias no dia a dia dos colaboradores do grupo Atlas Shrugged.

## Bibliotecas/frameworks utilizados na API

Para o desenvolvimento da API foram utilizadas as seguintes bibliotecas/frameworks:

[![Express](https://img.shields.io/badge/Express.js-000?style=plastic&logo=express)](http://expressjs.com/)
[![JsonWebToken](https://img.shields.io/badge/jwt-000?style=plastic&logo=jsonwebtokens)](https://jwt.io/introduction/)
[![Bcrypt](https://img.shields.io/badge/bcrypt-000?style=plastic)](https://openbase.com/js/bcrypt/documentation)
[![Mongoose](https://img.shields.io/badge/Mongoose-000?style=plastic&logo=mongodb)](https://openbase.com/js/bcrypt/documentation)

## Bibliotecas/frameworks utilizados no app mobile

Para o desenvolvimento do App mobile foram utilizadas as seguintes bibliotecas/frameworks:

[![React-native](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/docs/getting-started)
[![Expo](https://img.shields.io/badge/expo-000020?style=for-the-badge&logo=jsonwebtokens)](https://docs.expo.dev/development/getting-started/)
[![Styled-Components](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents)](https://styled-components.com/docs/basics#getting-started)
[![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios)](https://axios-http.com/ptbr/docs/api_intro)

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
```env
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

## Mobile 

### Getting started

Para iniciar o projeto mobile você precisa ter instalado em um telefone o aplicativo expo go que torna possível a visualização do projeto em tempo de execução dos seus projetos com react native. O dowload pode ser feito [aqui](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

Para instalar o projeto na máquina local em ambiente de desenvolvimento é necessário usar os seguintes comandos no terminal (supondo que você está na raíz do projeto)

```shell
cd parladoridealapp
npm i
npm run start

```


### Conexão com a api

A conexão com a api desenvolvida em express foi feita utilizando axios, então, primeiramente, certifique-se de que o servidor está rodando em sua máquina local, e então inicie a aplicação mobile.
> Para que a aplicação possa acessar os dados da api é necessário que ela esteja configurada com CORS, além disso as rotas do axios devem estar baseadas no ip local da sua máquina , basta ir no arquivo api.ts contido na raiz do projeto mobile e alterar o ip para seu ip local.

A construção da aplicação mobile usou como base o framework react-Native em conjunto com o expo para simulação do ambiente mobile.

A ideia era criar uma interface intuitiva e com boa usabilidade pelo usuário no momento de efetuar o login ou cadastro.
Ver suas próprias publicações na home page, e poder acessar uma página Feed onde constariam as postagens de todos os membros divididas por tópicos.

### Splash page e conceito visual

Pensei em usar primeiramente um tema dark pra aplicação pois acredito que seja mais visualmente agradável

[Layout com prints e etc](https://www.figma.com/file/ACHqWB4cueur6Q5mUlrliB/Expo-App-Icon-%26-Splash-(Community)?node-id=0%3A1)

> Esses são prints do modelo desenvolvido até o momento, devido a prioridades, desenvolvi a api primeiro, entretanto essa escolha acabou sendo custosa pro prazo.
