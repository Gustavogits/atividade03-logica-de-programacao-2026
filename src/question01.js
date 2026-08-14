import leia from "readline-sync"

var vendedores = leia.questionInt("Digite quantos vendedores: ");
var maisD = leia.questionInt("quantos vendedores fizeram mais de 5000 reais entra os " + vendedores + " participantes: ")
var vendidos = leia.questionInt("Se " + maisD + " fizeram mais de 5000, quanto eles fizeram? ")
var menosD = vendedores - maisD
var ambulantes = leia.questionInt("Se " + menosD + " vendedores venderam menos que 5k, quantos reais cada um deles fez? ")
var total = vendidos + ambulantes
var media = total / vendedores

console.log("A quantidade de vendedores que venderam mais de R$ 5.000,00 é: " + maisD);
console.log("A quantidade de vendedores que venderam  R$ 5.000,00 ou menos é : " + menosD);
console.log("O valor total vendido por todos os vendedores é " + total);
console.log("A média de vendas dos vendedores é: " + media);