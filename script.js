var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var continuar = "s"
var contador = 0

function DesejaContinuar() {
    while (continuar == "s") {
        ids[contador] = prompt("Insira o id do produto ", [contador])
        nomes[contador] = prompt("Insira o nome do produto ", [contador])
        precos[contador] = prompt("Insira o preco do produto ", [contador])
        avaliacoes[contador] = prompt("Insira uma avaliacao de 1-5 ao produto ", [contador])
        console.log("ID:", ids[contador], "Nome:", nomes[contador], "Preco:", precos[contador], "Avaliacao:", avaliacoes[contador])
        contador++
        continuar = prompt("Deseja adicionar mais produtos? Digite 's' para sim?")
    }
}
DesejaContinuar()

function ProcurarID() {
    var index = parseInt(prompt("Insira o ID do produto que deseja buscar"))
    console.log("O produto com o ID", index, "tem nome:", nomes[index], ", preco", precos[index], "R$", "e avaliacao:", avaliacoes[index])
}
ProcurarID()


function ProcurarNome(){
    var infoNome = prompt("Insira o nome do produto que deseja buscar")
    for(i = 0; i < nomes.length; i++){
        if(infoNome == nomes[i])
        console.log("O produto com o nome", nomes[i], "tem ID:", ids[i], ", preco", precos[i], "R$", "e avaliacao:", avaliacoes[i])
    }
}
ProcurarNome()