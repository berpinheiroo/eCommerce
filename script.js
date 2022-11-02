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
        avaliacoes[contador] = parseInt(prompt("Insira uma avaliacao de 1-5 ao produto ", [contador]))
        contador++
        console.log("Produto cadastrado com sucesso!")
        continuar = prompt("Deseja adicionar mais produtos? Digite 's' para sim?")
    }
}

function ProcurarID() {
    var index = parseInt(prompt("Insira o ID do produto que deseja buscar"))
    console.log("O produto com o ID", index, "tem nome:", nomes[index], ", preco", precos[index], "R$", "e avaliacao:", avaliacoes[index])
}



function ProcurarNome() {
    var infoNome = prompt("Insira o nome do produto que deseja buscar")
    for (i = 0; i < nomes.length; i++) {
        if (infoNome == nomes[i])
            console.log("O produto com o nome", nomes[i], "tem ID:", ids[i])
    }
}

var precosId = []
var avaliacoesId = []
var nomesId = []
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
                precosId[index] = precos[index3]
                avaliacoesId[index] = avaliacoes[index3]
                nomesId[index] = nomes[index3]
                ids[index3] = 0
                console.log("ID:", idsOrdenados[index], " Nome:", nomesId[index], " Preco:", precosId[index], "Avaliacao:", avaliacoesId[index])
                maiorNumero = 100000000
            }
        }
    }
    nomes = nomesId
    precos = precosId
    avaliacoes = avaliacoesId
    ids = idsOrdenados
}


var avaliacoesPreco = []
var idsPreco = []
var nomesPreco = []
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
                avaliacoesPreco[index] = avaliacoes[index3]
                nomesPreco[index] = nomes[index3]
                idsPreco[index] = ids[index3]
                precos[index3] = 0
                console.log("ID:", idsPreco[index], " Nome:", nomesPreco[index], " Preco:", precosOrdenados[index], "Avaliacao:", avaliacoesPreco[index])
                maiorPreco = 1000000
            }
        }
    }
    nomes = nomesPreco
    precos = precosOrdenados
    avaliacoes = avaliacoesPreco
    ids = idsPreco
}

var idsAvaliacao = []
var precosAvaliacao = []
var nomesAvaliacao = []
var maiorAvaliacao = 0
var avaliacoesOrdenadas = []
function OrdemAvaliacao() {
    for (var index = 0; index < avaliacoes.length; index++) {
        maiorAvaliacao = avaliacoes[index]
        for (var index2 = 0; index2 < avaliacoes.length; index2++) {
            if (avaliacoes[index2] > maiorAvaliacao) {
                maiorAvaliacao = avaliacoes[index2]
            }
        }
        for (var index3 = 0; index3 < avaliacoes.length; index3++) {
            if (maiorAvaliacao == avaliacoes[index3]) {
                avaliacoesOrdenadas[index] = avaliacoes[index3]
                idsAvaliacao[index] = ids[index3]
                nomesAvaliacao[index] = nomes[index3]
                precosAvaliacao[index] = precos[index3]
                avaliacoes[index3] = -1
                console.log("ID:", idsAvaliacao[index], " Nome:", nomesAvaliacao[index], " Preco:", precosAvaliacao[index], "Avaliacao:", avaliacoesOrdenadas[index])
                maiorAvaliacao = 6
            }
        }
    }
    nomes = nomesAvaliacao
    precos = precosAvaliacao
    avaliacoes = avaliacoesOrdenadas
    ids = idsAvaliacao
}

var precoAtualizado
var idAtualizar

function AtualizarPreco(idAtualizar) {
    idAtualizar = prompt("Insira o ID do produto que queira atualizar")
    precoAtualizado = parseInt(prompt("Insira um novo valor para o produto"))
    for (var index = 0; index < ids.length; index++) {
        if (idAtualizar == ids[index]) {
            precos[index] = precoAtualizado
            console.log("O novo valor deste produto e: " + precoAtualizado)
        }
    }
}

var supAvaliacoes = []
var supPrecos = []
var supNomes = []
var supIds = []
var idExcluir = []
var idsExcluidos = []
var nomesExcluidos = []
var precosExcluidos = []
var avaliacoesExcluidos = []
var contadorEx = 0

function ExcluirProduto() {
    idExcluir = prompt("Insira a ID do produto que quer excluir")
    for (var i = 0; i < ids.length; i++) {
        idExcluir[i] = idExcluir
        for (var i2 = 0; i2 < ids.length; i2++) {
            if (idExcluir[i] == ids[i2]) {
                idsExcluidos[i] = idExcluir
                ids[i2] = -1
                nomes[i2] = -1
                precos[i2] = -1
                avaliacoes[i2] = -1
            }
        }
        for (var i3 = 0; i3 < ids.length; ids++) {
            if (ids[i3] != -1) {
                supIds[i] = ids[i3]
                supNomes[i] = nomes[i3]
                supAvaliacoes[i] = avaliacoes[i3]
                supPrecos[i] = precos[i3]
            }
        }
    }
    nomes = supNomes
    ids = supIds
    avaliacoes = supAvaliacoes
    precos = supPrecos
    console.log("Produto excluido com sucesso")
}

var opcao = 0
function EscolherAcao() {
    while (opcao == 0) {
        opcao = prompt("Escolha a acao a ser realizada! 1 para cadastrar um produto / 2 para consulta por ID / 3 para consulta por nome / 4 para ordenar por ID / 5 para ordenar por preco / 6 para ordenar por avaliacao / 7 para atualizar o preco de algum produto / 8 para deletar um produto")
        if (opcao == 1) {
            DesejaContinuar()
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        } else if (opcao == 2) {
            ProcurarID()
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        } else if (opcao == 3) {
            ProcurarNome()
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        } else if (opcao == 4) {
            OrdemID()
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        } else if (opcao == 5) {
            OrdemPreco()
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        } else if (opcao == 6) {
            OrdemAvaliacao()
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        } else if (opcao == 7) {
            AtualizarPreco(idAtualizar)
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        } else if (opcao == 8) {
            ExcluirProduto()
            opcao = parseInt(prompt("Deseja continuar o programa? Digite 0 para sim"))
        }
    }
}
var condicao = "s"
var condicaoTotal = "s"
var desejarTotal = " "
var nomeProduto = ""
var quantidadeProduto = 0
var nomesProdutos = []
var quantidadesProdutos = []
var nomesProdutosSup = []
var quantidadesProdutosSup = []
var indexProdutosSup = 0
var indexCarrinho = 0


function CarrinhoLoja() {
    while (condicao == "s") {
        opcao = parseInt(prompt("Escolha uma acao: 1 = Adicionar produto ao carrinho // 2 = Excluir produto do carrinho // 3 = Valor total dos produtos // 4 = Listar os produtos do carinho e mostrar o valor"))
        if (opcao == "1") {
            nomeProduto = prompt("Insira o nome do produto a inserir no carrinho")
            quantidadeProduto = parseInt(prompt("Informe a quantidade que deseja adicionar"))
            AdicionarProduto(nomeProduto, quantidadeProduto)
        } else if (opcao == "2") {
            nomeProduto = prompt("Insira o nome do produto que deseja excluir do carrinho")
            quantidadeProduto = parseInt(prompt("Informe a quantidade que deseja excluir"))
            ExcluirCarrinho(nomeProduto, quantidadeProduto)
        } else if (opcao == "3") {
            InformarValorCarrinho()
        } else if (opcao == "4") {
            ListarProdutosCarrinhoValor()
        }
        condicao = prompt("Deseja continuar no carrinho? s = sim // n = nao")
    }
}

function AdicionarProduto(nomeProduto, quantidadeProduto) {
    var contador = 0
    var cont = 0

    for (var i = 0; i < nomesProdutos.length; i++) {
        if (nomeProduto == nomesProdutos[i]) {
            quantidadeProduto[i] = quantidadesProdutos[i] + quantidadeProduto
            console.log("Quantidade adicionada!")
            contador++
        }
    }

    while (contador == 0) {
        for (var i2 = 0; i2 < nomes.length; i2++) {
            if (nomeProduto == nomes[i2]) {
                nomesProdutos[indexCarrinho] = nomeProduto
                quantidadesProdutos[indexCarrinho] = quantidadeProduto
                indexCarrinho++
                console.log("Produto cadastrado!")
                cont++
            }
        }
        if (cont == 0) {
            console.log("Não existe nenhum produto com esse nome.")
        }
        contador++
    }
    console.log(nomesProdutos)
    console.log(quantidadesProdutos)
}

function ExcluirCarrinho(nomeProduto, quantidadeProduto) {
    nomesProdutosSup = []
    quantidadesProdutosSup = []

    for (var i3 = 0; i3 < nomesProdutos.length; i3++) {
        if (nomeProduto == nomesProdutos[i3] && quantidadesProdutos[i3] == quantidadeProduto) {
            nomesProdutos[i3] = 0
            quantidadesProdutos[i3] = 0
            console.log("Produto excluido!")

        } else if (nomeProduto == nomesProdutos[i3] && quantidadesProdutos[i3] > quantidadeProduto) {
            quantidadesProdutos[i3] = quantidadesProdutos[i3] - quantidadeProduto

        } else if (nomeProduto == nomesProdutos[i3] && quantidadesProdutos[i3] < quantidadeProduto) {
            nomesProdutos[i3] = 0
            quantidadesProdutos[i3] = 0
            console.log("Produto excluido!")
        }
    }
    for (let index2 = 0; index2 < nomesProdutos.length; index2++) {
        if (nomesProdutos[index2] != 0 && quantidadesProdutos[index2] != 0) {
            nomesProdutosSup[indexProdutosSup] = nomesProdutos[index2]
            quantidadesProdutosSup[indexProdutosSup] = quantidadesProdutos[index2]
            indexProdutosSup++
        }
    }

    console.log(nomesProdutosSup)
    console.log(quantidadesProdutosSup)

    indexCarrinho--
    indexProdutosSup = 0
    nomesProdutos = nomesProdutosSup
    quantidadesProdutos = quantidadesProdutosSup
}

function InformarValorCarrinho() {
    var valorTotal = 0
    for (var i = 0; i < nomesProdutos.length; i++) {
        for (var i2 = 0; i2 < nomes.length; i2++) {
            if (nomesProdutos[i] == nomes[i2]) {
                valorTotal = valorTotal + (precos[i2] * quantidadesProdutos[i])
            }
        }
    }
    console.log("O valor total do seu carrinho é de: R$" + valorTotal + ",00.")
}

function ListarProdutosCarrinhoValor() {
    var valorTotal = 0
    var precosCarrinho = []
    var indexPrecoCarrinho = 0
    for (var i = 0; i< nomesProdutos.length; i++) {
        for (var i2 = 0; i2 < nomes.length; i2++) {
            if (nomesProdutos[i] == nomes[i2]) {
                valorTotal = valorTotal + (precos[i2] * quantidadesProdutos[i])
                precosCarrinho[indexPrecoCarrinho] = precos[i2]
                indexPrecoCarrinho++
            }
        }
    }

    for (var i = 0; i < nomesProdutos.length; i++) {
        console.log("Produto: " + nomesProdutos[i] + ". Quantidade: " + quantidadesProdutos[i] + ". O valor desse produto é: " + precosCarrinho[i])
    }
    console.log("O valor total do seu carrinho é: " + valorTotal)
}

while(condicaoTotal == "s"){
    desejarTotal = prompt("O que você deseja no nosso sistema? 1 = Sistema de cadastro // 2 = Carrinho de compras // 3 = Finalizar procedimentos")

    if(desejarTotal == "1"){
        EscolherAcao()
        condicao = "s"
    }
    if(desejarTotal == "2"){
        CarrinhoLoja()
    }
    if(desejarTotal == "3"){
        condicaoTotal = "n"
    }

}