<?php

    //Percorrer Array Associativo
    $notasAtividades = [
        "Caio" => 10, 
        "Marcos" => 8, 
        "Diego" => 9
    ];

    foreach ($notasAtividades as $nome => $nota) {
        echo $nome . " nota " . $nota . "<br>";
    }

    //Percorrer Dois Arrays Associativos
    $notasAtividades = [
        "Caio" => 10, 
        "Marcos" => 8, 
        "Diego" => 9
    ];

    $notasProvas = [
        "Caio" => 9,
        "Marcos" => 8, 
        "Diego" => 10
    ];

    foreach ($notasAtividades as $nome => $nota) {
        $prova = $notasProvas[$nome];

        echo $nome . " nota " . $nota . "<br>";
        echo $nome . " nota " . $prova . "<br>";
    }



?>