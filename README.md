# Gus-Gua-JavaScript
Curso Gustavo Guanabara JavaScript

**Bibliografia** https://developer.mozilla.org/pt-BR/docs/Web/Events

## Aula 3 dando os primeiros passos.
Instalação do node.js e visual studio code. dicas de livros e insentivos.

## Aula 4 
Funções: Alert() Retorna mensagem
 confirm() confirmação
 prompt() entrada de valor e retorna string

## Aula 6

### Aula de tratamento de dados
#### Convertendo uma string por numero
**Modo antigo:**
var n1 = Number.parseInt(window.prompt('Digite um número: '))
**Modo atual:**
var n1 = Number(window.prompt('Digite um número: ')) qual faz o tratamento de numero inteiro e flutuante.

#### Convertendo número para string

É somente usar: variavel.toString ou String(variavel)

#### Formatando String

**Template String**

utiliza crase e place holder
 **Exemplo:**
`O aluno ${nome} com ${idade} anos`
onde nome e idade são variaveis que recebem valores

### Formatando número
**Ex: var n1 = 2222.22**
n1.toFixed(2) Fixa duas casas decimais
**2222.22**
n1.toFixed(2).replace('.','.') Troca ponto por virgula
**2222,22**
n1.toLocaleString('pt-BR', {style: 'currency', currecy:'BRL'}) CONVERTE O NUMERO PARA DINHEIRO
**R$ 2222,22**

## Aula 9 DOM

### Formas de selecionar elementos.

**Por marca ou tag, por ID, por nome, por Classe, por seletor**

**Por Marca ou Tag**
getElementsByTagName()

**Por Id**
 getElementById()

 **Por name**

 getElementsByName()

 **Por classe**

 getElementsByClassName()

 **Por query selector**

 querySelector()

## Aula 10 Eventos com DOM

addEventListener('mouseenter', entrar)
onde: mouseenter é o evento, e entrar é a fução.

### Site mozila com referencias de eventos.

event reference MDN

https://developer.mozilla.org/pt-BR/docs/Web/Events

**Eventos com mouse**

**mouseenter** cursor no elemento
**mousemove**
**mousedown**
**mouseup**
**click** clicar no elemento
**mouseout** cursor fora do elemento
 demais eventos ver site mozila
 








