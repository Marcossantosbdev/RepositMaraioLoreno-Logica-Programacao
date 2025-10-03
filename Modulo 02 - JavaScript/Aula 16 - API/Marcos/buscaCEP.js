//https://viacep.com.br/ws/COLOCAR CEP/json//

const cep = document.getElementById("cep")

cep.addEventListener("change", (evento) => {
    let cepUsuario = evento.target
    buscaCEP(cepUsuario.value)
})

async function buscaCEP(cepUsuario){

    let erroCEP = document.getElementById("erro")
    erroCEP.innerHTML = ""

    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)
        console.log(consultaCEP);

        let consultaCEPJson = await consultaCEP.json()
        console.log(consultaCEPJson);
        
        if (consultaCEPJson.erro){
            throw Error ("CEP INEXISTENTE")
        }

        preencheCampos(consultaCEPJson)

    }
    catch {
        erroCEP.innerHTML = "CEP inválido! Tente novamente!"
        apagaCampos()
    }
}

function preencheCampos(cepJson){
    console.log(cepJson);
    console.log(cepJson.logradouro);

    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    rua.value = cepJson.logradouro
    bairro.value = cepJson.bairro
    cidade.value = cepJson.localidade
    estado.value = cepJson.uf
}

function apagaCampos(){
    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    rua.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""
}