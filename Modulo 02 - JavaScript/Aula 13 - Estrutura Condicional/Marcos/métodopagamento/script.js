function calculoPagamento() {
    let valorgasto = document.getElementById(("valorCompra").value)
    let formapagar = document.getAnimations("formaPagamento").value
    let resultado =  document.querySelector("#Resultado")

    switch (formaPagamento) {
        case "pix":
            let valorFinal = valorGasto * 0.9
            resultado.innerHTML = "O valor a ser pago é de " + valorFinal.toFixed(2)
            break
        case "débito":
            valorFinal = valorGasto * 0.95
            resultado.innerHTML = "O valor será de " + valorFinal.toFixed(2)
            break
        case "crédito":
            resultado.innerHTML =  "O valor será de " + valorGasto.toFixed(2)
            break
        case Default:
            resultado.innerHTML = "OPÇÃO inválida"
            break
    }
}