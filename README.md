![capa teste tecnico](https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/assets/teste-tecnico-capa.png)

## Diagrama Inicial de Database DB para o Teste Tecnico E-commerce Natura

![db inicial](https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/backend-natura/out/db/Diagrama%20do%20E-commerce%20da%20Natura.png)

## Passos para rodar o programa:

### A Aplicação contém 3 pastas:

1. Ajuste o arquivo .env.example e coloque as credenciais do banco de dados a porta da aplicação, o host é localhost:

```
SERVER_PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=


JWT_SECRET=

```

2. Navegue até a pasta de backend e rode os seguintes comandos:

```
docker-compose up -d

yarn seed:run

```

3. Já cria um carrinho, pois a implementação ficou faltando, sem tempo, eu estava criando uma autenticação também, funcional, mas ainda faltando ajustes.

```
{
	"username": "john.doe@email.com",
	"password": "123456"
}

```

3.1. Para um teste de verificação do Token, para comprovação.

4. Criado o Swagger do Projeto da API:

```
http://localhost:${substitua a porta no arquivo .env}/api

```

5. o Storebook, quando eu comecei a mexer, meu computador quase explode, pois consome muita memória, (docker, aplicação front end e backend, e mais o storebook), fico devendo, mas não porque não sei usar, mas sim problemas de hardware mesmo.
