function calcularMedia () {
    var valor1 = document.getElementById("nota1").value;
    var valor2 = document.getElementById("nota2").value;
    var numero1 = parseFloat(valor1);
    var numero2 = parseFloat(valor2);
    var soma = numero1 + numero2;
    var media = soma / 2;
    document.getElementById("resultado").innerHTML = "Soma: " + soma + "<br>Média: " + media;
}