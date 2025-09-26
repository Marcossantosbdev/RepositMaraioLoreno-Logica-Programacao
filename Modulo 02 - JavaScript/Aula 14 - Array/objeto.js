let produto = {
    nome: "Computador",
    fabricante: "Positivo",
    preco: 2000,
    processador: "I3-2100"
}

// Acessando um item no objeto
console.log(produto.nome);
console.log(produto["preco"])

//Adicionar um item no objeto
produto.armazenamento = "256gb"
produto["Memória RAM"] = "8 GB"

//Remover um produto
delete produto.armazenamento
delete produto["Memória RAM"]
console.log(produto);
