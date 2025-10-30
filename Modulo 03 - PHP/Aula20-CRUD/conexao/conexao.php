<?php

    $servername = "localhost"; //ip ou dominio do server
    $username = "root" ; //usuário no banco de dados
    $password = ""; //senha do usuário no banco de dados
    $dbname = "faculdade";

    //Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname );

    //Verificar conexão
    if ($conn->connect_error){
        die("Conexão falhou");
    }

?>