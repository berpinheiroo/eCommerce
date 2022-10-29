var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var continuar = "s"
var contador = 0

function DesejaContinuar() {
    while (continuar == "s") {
        ids[contador] = parseInt(prompt("Insira o id do produto ", [contador]))
        nomes[contador] = prompt("Insira o nome do produto ", [contador])
        precos[contador] = parseInt(prompt("Insira o preco do produto ", [contador]))
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



function ProcurarNome() {
    var infoNome = prompt("Insira o nome do produto que deseja buscar")
    for (i = 0; i < nomes.length; i++) {
        if (infoNome == nomes[i])
            console.log("O produto com o nome", nomes[i], "tem ID:", ids[i], ", preco", precos[i], "R$", "e avaliacao:", avaliacoes[i])
    }
}

var maiorNumero = 0
var idsOrdenados = []
function OrdemID() {
    for (var index = 0; index < ids.length; index++) {
        maiorNumero = ids[index]
        for (var index2 = 0; index2 < ids.length; index2++) {
            if (maiorNumero < ids[index2]) {
                maiorNumero = ids[index2]
            }
        }
        for (var index3 = 0; index3 < ids.length; index3++) {
            if (maiorNumero == ids[index3]) {
                idsOrdenados[index] = ids[index3]
                ids[index3] = 0
            }
        }
    }
}

OrdemID()
console.log(idsOrdenados)


var maiorPreco = 0
var precosOrdenados = []
function OrdemPreco() {
    for (var index = 0; index < precos.length; index++) {
        maiorPreco = precos[index]
        for (var index2 = 0; index2 < precos.length; index2++) {
            if (precos[index2] > maiorPreco) {
                maiorPreco = precos[index2]
            }
        }
        for (var index3 = 0; index3 < precos.length; index3++) {
            if (maiorPreco == precos[index3]) {
                precosOrdenados[index] = precos[index3]
                precos[index3] = 0
            }
        }
    }
}
OrdemPreco()
console.log(precosOrdenados)