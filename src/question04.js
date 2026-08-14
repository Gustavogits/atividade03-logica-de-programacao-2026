import leia from "readline-sync"

var pedidos = leia.questionInt("Digite quantos pedidos voce ira realizar: ");
var qnt = 0

var hamburguer = 20
var cachorrito = 15
var refri = 7
var batata = 12


while(qnt < pedidos){
    var comentario = leia.keyInSelect("Escolha uma alternativa: " ["0","1","2","3","4"])
    console.log("1- hamburguer");
    console.log("2- cachorrito");
    console.log("3- refri");
    console.log("4- batata");
    console.log("0- cancelar");

    if(comentario === "1"){
        console.log(" + hamburguer")
        
    } else if(comentario === "2"){
        console.log(" + cachorrito")
    } else if(comentario === "3"){
        console.log(" + refri")
    }
}
