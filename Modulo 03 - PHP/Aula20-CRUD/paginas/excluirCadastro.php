<?php
//Valida se o $_POST["id"] está vazio
if(isset($_POST["id"])){

    //Conexão com o banco
    include("../conexao/conexao.php");

    //Criar a variável do ID
    $id = $_POST["id"];

    //Prepara a consulta SQL para excluir cadastro
    $sql = "DELETE FROM usuarios WHERE ID = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i" , $id);

        //Executa a query
        $stmt->execute();

        //Direciona você para a página especificada
        header("Location: verificarUsuario.php")

        //Encerra a consulta
        $stmt->close();
    } else {
        echo "<div class='mensagem erro'>Erro na consulta</div>"
    }
    //Encerra a conexão com o banco de dados
    $conn->close();
}




?>