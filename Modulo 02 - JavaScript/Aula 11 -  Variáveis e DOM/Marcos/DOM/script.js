// window.document.body.style.backgroundColor = "pink";
// document.body.style.color = "white";

// window.alert("seja bem vindo");

// window.prompt("Login");
//window.prompt("senha");

// window.confirm("Pink+white -  Frank Ocean");

let paragrafo1 = document.getElementsByTagName("p")[0]
paragrafo1.innerHTML = "Caixa de bombom(FOR)"
paragrafo1.style.backgroundColor = "lightblue"

let paragrafo2 = document.getElementById("Caixa2")
paragrafo2.innerHTML = "Caixa de fruta(ID)"
paragrafo2.style.backgroundColor = "red"

let paragrafo3 = document.getElementsByClassName("Caixa")[0]
paragrafo3.innerHTML = "Caixa de verduras(classe)"
paragrafo3.style.backgroundColor = "blue"

//let paragrafo4 = document.getElementsByName("Caixa4")[3]
//paragrafo4.placeholder = "Digite Caixa de legumes(Por nome)"

let paragrafo4 = document.querySelector("#Caixa4")
paragrafo4.innerHTML = "Caixa de Legumes(Query)"
paragrafo4.style.backgroundColor = "purple"

let paragrafo5 = document.querySelectorAll("p")[4]
paragrafo5.innerHTML = "Caixa HortiFrutti(Query selector all)"
paragrafo5.style.backgroundColor = "lightgreen"