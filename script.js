var id = []
var nome = []
var preco = []
var avaliacao = []
var continuar = "s"
var contador = 0

function DesejaContinuar() {
    while (continuar == "s") {
        id[contador] = prompt("Insira o id do produto ", [contador])
        nome[contador] = prompt("Insira o nome do produto ", [contador])
        preco[contador] = prompt("Insira o preco do produto ", [contador])
        avaliacao[contador] = prompt("Insira uma avaliacao de 1-5 ao produto ", [contador])
        console.log("ID:", id[contador], "Nome:", nome[contador], "Preco:", preco[contador], "Avaliacao:", avaliacao[contador])
        contador++
        continuar = prompt("Deseja adicionar mais produtos? Digite 's' para sim?")
    }
}
DesejaContinuar()

var index = 0
function ProcurarID() {
    index = parseInt(prompt("Insira o ID do produto que deseja buscar"))
    console.log("O produto com o ID", index, "tem nome:", nome[index], ", preco", preco[index], "R$", "e avaliacao:", avaliacao[index])
}
ProcurarID()