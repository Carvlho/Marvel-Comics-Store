
# Marvel Comics Store

O desafio consiste em criar uma loja fictícia de quadrinhos da Marvel que permite aos usuários visualizar os quadrinhos da API oficial da Marvel, aplicar cupons de desconto e finalizar uma compra fictícia.

## Deploy

- [Marvel Comics Store](https://marvelcomicsstore-desafio.vercel.app)

## API

- [Marvel API](https://developer.marvel.com)

## Tecnologias utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- [React](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Cypress](https://www.cypress.io)
- [Styled Components](https://styled-components.com)

## Instalação

Para executar este projeto localmente, é necessário ter o Node.js instalado em sua máquina.

- Faça o clone deste repositório.
- No diretório raiz do projeto, execute o comando npm install/yarn install para instalar as dependências do projeto.
- Crie um arquivo .env no diretório raiz do projeto e defina as variaveis VITE_API_BASE_KEY com a url base da API, VITE_API_PUBLIC_KEY com a sua chave de API pública da Marvel e VITE_API_PRIVATE_KEY com a sua chave de API privada da Marvel.
- Execute o comando npm run dev/yarn dev para iniciar o servidor de desenvolvimento.

## Funcionalidades

### Lista de quadrinhos

- Na página inicial da loja, é exibida uma lista de quadrinhos da Marvel.

### Carrinho de compras

- Na página inicial da loja, é exibido um carrinho de compras que permite ao usuário adicionar quadrinhos ao carrinho, remover quadrinhos do carrinho, aplicar cupons de desconto e finalizar a compra.

## Testes E2E

Este projeto possui testes E2E automatizados utilizando o Cypress. Para executar os testes, siga os seguintes passos:

- No diretório raiz do projeto, execute o comando npx cypress open/yarn run cypress open.
- O Cypress irá abrir uma janela com para escolher entre Testes E2E ou Component Testing.
- Selecione Testes E2E, ele perguntara de que maneira você quer rodar ele, selecione sua opção.
- Então ele abrirá uma aba na opção que você selecionou e mostrará os testes disponíveis.
- Escolha o teste que você quer rodar e o cypress irá executar o teste selecionado.

## Cupons

- **HQCOMUM** (20% de desconto em HQ's de tipo comum)
- **HQRARA** (10% de desconto em HQ's de tipo raro)
