// Criando objetos em uma lista(array)
let listaProdutos = [
    {nome: "Computador", fabricante: "Dell", valor: 5000},
    {nome: "Notebok", fabricante: "Positivo", valor: 2300},
    {nome: "Celular", fabricante: "Samsung", valor: 1200},
    {nome: "Teclado", fabricante: "Husky blizzard", valor: 350},
    {nome: "Mouse", fabricante: "Logitech", valor: 280},
    {nome: "Mousepad", fabricante: "Redragon", valor: 40},
    {nome: "Monitor 32'", fabricante: "Asus", valor: 1270},
]

// Selecionando e exibindo itens do array(lista)
console.log(listaProdutos[0])
console.log(listaProdutos[1])

// Percorrendo a lista de produtos
listaProdutos.forEach((produto) => {
    console.log(`O ${produto.nome} da ${produto.fabricante} custa R$: ${produto.valor}`);
})

// Filtrando produtos
let listaProdutosCaros = listaProdutos.filter(produto => produto.valor > 1000);
console.log(listaProdutosCaros)