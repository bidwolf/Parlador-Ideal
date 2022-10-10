# Parlador-Ideal
Uma aplicação que visa facilitar a troca de ideias libertárias no dia a dia dos colaboradores do grupo Atlas Shrugged.

## Bibliotecas/frameworks utilizados

Para o desenvolvimento da API foram utilizadas as seguintes bibliotecas:

## API

A API da aplicação foi construída de acordo com os padrões REST e contém os seguintes endpoints:
### User
A API responsável por criar,acessar, atualizar e deletar usuários.
A seguir estão descritos os códigos de resposta e as mensagens enviadas 
#### GET /api/user/userID
Código|Mensagem|Descrição
:---:|:---:|:---:
200|`user:{_id:<Id do usuário>,name:<Nome do usuário>,email:<Email do usuário>,publications:<quantidade de posts feitos>}`|Retorna os dados usuário consultado de forma simplificada.
400|`Invalid parameter`|Parâmetro de usuário inválido.
404|`Page not Found`|Usuário não existente.
500|`Internal server error, please try again later.`| Representa um erro interno não tratado pelo servidor
#### POST /api/user/register
Código|Mensagem|Descrição
:---:|:---:|:---:
201|`User registered`| O usuário foi cadastrado com sucesso.
422|`You must enter a name in the register.`|Você precisa fornecer um nome para se cadastrar.
422|`User cannot be registered, you need to provide an valid email.`|Email fornecido fora dos padrões ou inexistente.
422|`You need to provide an password.`|Você precisa fornecer uma senha para se cadastrar.
422|`You need to confirm your password.`|Você precisa confirmar a senha utilizada anteriormente no site.
422|`Your password must be 8 characters or more.`|Sua senha precisa ter 8 caracteres ou mais.
500|`Internal server error, please try again later.`| Representa um erro interno não tratado pelo servidor

#### DELETE /api/user

Código|Mensagem|Descrição
:---:|:---:|:---:
200|`User has been deleted`|O usuário foi deletado com sucesso.
400|`Invalid parameters`|Parâmetro url inválido
401|`Access denied`|Acesso negado, você deve ser o dono da conta para poder excluí-la.
500|`Internal server error, please try again later.`| Representa um erro interno não tratado pelo servidor

#### PUT /api/user/userId

Código|Mensagem|Descrição
:---:|:---:|:---:
200|`userUpdated.name <name||password||email> was updated`|Sucesso ao editar o dado do usuário solicitado
400|`Invalid parameters`|Parâmetro url inválido
401|`Access denied,unauthenticated user`|Acesso negado, você deve estar autenticado para poder editar algum dado do usuário
403|`Unauthorized user`|Acesso negado, você não possui permissão para editar os dados desse usuário
404|`User not found`|Não existe nenhum usuário no banco que atenda ao parâmetro url enviado
422|`User cannot be registered, you need to provide an valid email.`|Email fornecido fora dos padrões ou inexistente.
422|`You need to provide an password.`|Você precisa fornecer uma senha para se cadastrar.
422|`You need to confirm your password.`|Você precisa confirmar a senha utilizada anteriormente no site.
422|`Your password must be 8 characters or more.`|Sua senha precisa ter 8 caracteres ou mais.fd