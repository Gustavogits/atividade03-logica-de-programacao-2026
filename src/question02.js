import leia from "readline-sync"

var senha = "4321"

for(var tentativas = 0; tentativas < 3; tentativas++){
    var perguntas = leia.question("Digite a senha: ")
    if(tentativas === "4321"){
        console.log("Voce pode passar!")
    }
}