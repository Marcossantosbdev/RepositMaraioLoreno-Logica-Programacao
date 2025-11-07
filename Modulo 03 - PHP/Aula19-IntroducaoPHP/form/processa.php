<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="stylephp.css">
</head>
<body>
    <main class="container">
        <h1>Dados Enviados</h1>

        <?php

        //echo var_dump($_POST);
        //var_dump($_REQUEST['nome']);
        
        $nome = $_POST["nome"];
        $sobrenome = $_POST["sobreNome"];
        $email = $_POST["email"];
        $senha = $_POST["senha"];
        
        echo "<p id='campoNome'><strong>O seu nome é </strong> $nome </p>";
        echo "<p><strong>O seu sobrenome é </strong> $sobrenome </p>";
        echo "<p><strong>O seu email é </strong> $email </p>";
        echo "<p><strong>A sua senha é </strong> $senha </p>";

        ?>
</body>
</html>