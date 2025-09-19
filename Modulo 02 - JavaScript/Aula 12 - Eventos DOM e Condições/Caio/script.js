let caixa = document.getElementById("mouse")

function entradaMouse() {
    caixa.style.backgroundColor = "blue"
}

function saidaMouse() {
    caixa.style.backgroundColor = "red"
}

function mudaHtml() {
    let nome = document.querySelector("#nome").value
    caixa.innerHTML = nome
}