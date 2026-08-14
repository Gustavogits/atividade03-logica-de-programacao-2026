import leia from "readline-sync"

var partidas = leia.questionInt("Digite quantas partidas foram jogadas: ");

for(var i = 0; i < partidas; i++){
    var gols = leia.questionInt("Quantos gols voce fez nesse jogo? ")
    console.log(gols)
}

var pontos = gols * 50
var totalGol = gols
var media = gols / partidas
var melhor =  gols > 2

console.log("Total de gols: " + gols);
console.log("Pontuacao: " + pontos);
console.log("Media de gols por jogo: " + media);
console.log("Partidas com mais de 2 gols: " + melhor)