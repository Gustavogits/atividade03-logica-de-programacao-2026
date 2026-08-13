# Atividade Avaliativa III - Prática

* Curso - Desenvolvimento de Sistemas
* Unidade Curricular - Lógica de Programação
* Docente - Gustavo Roberto de Souza

## Orientações Gerais

* A avaliação deverá ser realizada individualmente.
* Não é permitido o uso do celular durante a realização da atividade.
* Não é permitido o uso de nenhum tipo de auxílio de IA (Inteligência Artificial).
* Conceitos de entrada e saída de dados, variáveis, operadores, estruturas condicionais e estruturas de repetição.
* Não deverá ser utilizado vetor, array, lista, matriz ou objeto para armazenar os dados.
* A entrega deverá ser feita no AVA, enviando apenas o link do repositório do GitHub.

## Passo-a-Passo (Clonar e Entrega)

1. Você deve fazer um fork deste repositório. Na parte superior da página, clique no botão de **Fork**.
2. Depois disso, você deve clonar o repositório para o seu computador utilizando o seguinte comando:

   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o comando `git clone <url_do_repositório>`.
3. Abra no VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar, você deverá commitar e enviar novamente para o GitHub suas modificações.

   1. Adicione as alterações ao stage utilizando o comando `git add .`.
   2. Faça o commit utilizando o comando `git commit -m "sua mensagem"`.
   3. Envie as alterações utilizando o comando `git push origin master`.
6. Por fim, copie o link do seu repositório e faça o envio no AVA.

   1. O link deverá ser adicionado como comentário na entrega da atividade.

## Questões

### Questão 01

Uma empresa deseja analisar o desempenho de seus vendedores durante um determinado período.

Desenvolva um algoritmo que solicite ao usuário a quantidade de vendedores que serão analisados.

Para cada vendedor, o programa deverá solicitar o valor total de vendas realizadas.

Ao final, o algoritmo deverá apresentar:

* A quantidade de vendedores que venderam mais de R$ 5.000,00.
* A quantidade de vendedores que venderam R$ 5.000,00 ou menos.
* O valor total vendido por todos os vendedores.
* A média de vendas dos vendedores.

---

### Questão 02

Você está desenvolvendo um sistema para controlar as tentativas de acesso a uma área restrita. A senha correta do sistema é `4321`.
O algoritmo deverá solicitar uma senha ao usuário.

Enquanto a senha digitada estiver incorreta, o programa deverá informar:

`Senha incorreta! Tente novamente.`

O usuário poderá realizar no máximo **3 tentativas**.

Caso informe a senha correta, o programa deverá apresentar:

`Acesso permitido.`

Caso utilize todas as tentativas sem acertar a senha, deverá apresentar:

`Acesso bloqueado.`

Ao final, informe também quantas tentativas foram utilizadas.

---

### Questão 03

Um posto de combustível deseja analisar os abastecimentos realizados durante um determinado período.

Desenvolva um algoritmo que inicialmente solicite ao usuário a quantidade de abastecimentos que serão registrados.

Para cada abastecimento, o programa deverá solicitar:

* Tipo de combustível:

  * `1 - Gasolina`
  * `2 - Etanol`
  * `3 - Diesel`
* Quantidade de litros abastecidos.

Considere os seguintes valores por litro:

* Gasolina - R$ 6,20
* Etanol - R$ 4,30
* Diesel - R$ 5,90

Para cada abastecimento, o algoritmo deverá calcular e apresentar o valor a ser pago.

Ao final, o programa deverá apresentar:

* Quantidade de abastecimentos com gasolina.
* Quantidade de abastecimentos com etanol.
* Quantidade de abastecimentos com diesel.
* Quantidade total de litros vendidos.
* Valor total arrecadado pelo posto.
* Qual combustível teve a maior quantidade de abastecimentos.

Caso seja informado um tipo de combustível inválido, o abastecimento não deverá ser contabilizado e o usuário deverá informar os dados novamente.

---

### Questão 04

Você precisa desenvolver um sistema simples para controlar os pedidos realizados em uma lanchonete.

O programa deverá apresentar repetidamente o seguinte menu:

`1 - Hambúrguer - R$ 20,00`
`2 - Cachorro-quente - R$ 15,00`
`3 - Refrigerante - R$ 7,00`
`4 - Batata frita - R$ 12,00`
`0 - Finalizar pedido`

A cada escolha, o valor correspondente deverá ser adicionado ao total da compra.

O menu deverá continuar sendo apresentado até que o usuário escolha a opção `0`.

Ao finalizar, o algoritmo deverá apresentar:

* Quantidade total de itens pedidos.
* Valor total da compra.
* Valor médio gasto por item.

Caso seja informada uma opção diferente das disponíveis no menu, apresente uma mensagem informando que a opção é inválida e não contabilize nenhum item.

---

### Questão 05

Um jogador deseja analisar seu desempenho em várias partidas.

O algoritmo deverá solicitar quantas partidas serão analisadas.

Para cada partida, informe a quantidade de gols marcados.

Considere que cada gol vale `50 pontos`.

Ao final, o programa deverá apresentar:

* A quantidade total de gols.
* A pontuação total do jogador.
* A média de gols por partida.
* Quantas partidas o jogador marcou 2 gols ou mais.
