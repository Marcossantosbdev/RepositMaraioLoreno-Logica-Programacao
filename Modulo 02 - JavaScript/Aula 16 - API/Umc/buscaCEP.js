// Comentar com eles sobre a API do via CEP, usar diversos e-mail
// https://viacep.com.br/ws/08717400/json/


// Função assíncrona para buscar o endereço a partir do CEP informado
async function buscaEndereço(cep) {

    // Seleciona o elemento HTML que exibirá mensagens de erro
    var mensagemErro = document.querySelector("#erro");
    // Limpa qualquer mensagem de erro anterior
    mensagemErro.innerHTML = '';

    try {
        // Faz uma requisição à API ViaCEP para buscar os dados do CEP informado
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        console.log(consultaCEP);
        
        // Converte a resposta da API para um objeto JSON
        let consultaCEPJSON = await consultaCEP.json();
        console.log(consultaCEPJSON.erro);
                
        // Se a API retornar um erro (CEP inexistente), lança um erro
        if (consultaCEPJSON.erro) {
            apagaCampos();
            throw Error('CEP inexistente');
        }
        
        // Chama a função para preencher os campos do formulário com os dados do CEP
        validacoesDeCampos(consultaCEPJSON);
        
        // Retorna os dados do CEP
        return consultaCEPJSON;
        
    }   
    catch (erro) { 
        // Exibe uma mensagem de erro no HTML caso o CEP seja inválido
        apagaCampos();
        mensagemErro.innerHTML = `<p> CEP Inválido, Tente Novamente !! </p>`;
        // Exibe o erro no console para depuração
    }
}

const cep = document.querySelector("#cep");

cep.addEventListener("change", (evento) => {
    // Obtém o valor do CEP digitado pelo usuário
    let cep = evento.target;
    // Chama a função para buscar o endereço com base no CEP digitado
    buscaEndereço(cep.value);
    console.log(cep.value);
    
});

function validacoesDeCampos(cepDigitado) {
    // Seleciona os campos do formulário onde os dados do endereço serão inseridos
    const rua = document.querySelector("#rua");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    // Preenche os campos com os dados obtidos da API
    rua.value = cepDigitado.logradouro;
    bairro.value = cepDigitado.bairro;
    cidade.value = cepDigitado.localidade;
    estado.value = cepDigitado.uf;
}

function apagaCampos() {
    // Seleciona os campos do formulário onde os dados do endereço serão inseridos
    const rua = document.querySelector("#rua");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    // Preenche os campos com os dados obtidos da API
    rua.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}
