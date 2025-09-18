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

let paragrafo3 = document.getElementsByClassName("Caixa3")[0]
paragrafo3[0].innerHTML = "Caixa de verduras(classe)"
paragrafo3[0].style.backgroundColor = "blue"