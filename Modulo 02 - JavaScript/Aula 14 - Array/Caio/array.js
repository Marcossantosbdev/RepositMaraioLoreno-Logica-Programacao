let listaTimes = ["Santos", "São Paulo", "Palmeiras", "Corinthians"]

console.log(listaTimes[0]);
console.log(listaTimes[1]);
console.log(listaTimes[2]);
console.log(listaTimes[3]);

//Adicionar itens em um array
listaTimes.push("Ponte Preta")
listaTimes.push("Flamengo")
console.log(listaTimes);

//Adicionar um item na primeira posição
listaTimes.unshift("Fluminense")
listaTimes.unshift("Vasco")
console.log(listaTimes);

//Remover um item no início do array
listaTimes.shift()
console.log(listaTimes);

//Remover o último elemento do array
listaTimes.pop()
console.log(listaTimes);

//Encontrar a posição de um item
console.log(listaTimes.indexOf("Santos"));

let listaNomes = ["Marcos", "Diego", "Camila", "Matheus"]

//Removendo itens
listaNomes.splice(3,1) // Matheus foi removido
console.log(listaNomes);

//Alterando itens
listaNomes.splice(1,2, "Robson", "Edivan")
console.log(listaNomes);

//Adicionando Itens
listaNomes.splice(2,0,"Gabriel", "Diogo")
console.log(listaNomes)