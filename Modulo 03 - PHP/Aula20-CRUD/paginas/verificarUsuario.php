<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Usuário</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>

    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="#">Procurar Usuário</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="containerSection">
            <form action="verificarUsuario.php" method="post">
                <input type="email" name="email" id="email" placeholder="Informe seu E-mail">
                <input type="submit" value="Buscar">
            </form>
        </section>

        <section>

            <?php

                if (isset($_POST["email"])) {
                    include("../conexao/conexao.php");
                    $email = $_POST["email"];

                    $sql = "SELECT * FROM usuarios WHERE email = ?";
                    $stmt = $conn->prepare($sql);

                    if ($stmt) {
                        $stmt->bind_param("s" , $email);
                        $stmt->execute();
                        $resultado = $stmt->get_result();

                        if ($resultado->num_rows > 0) {
                            $row = $resultado->fetch_assoc();
                            echo "
                            <table>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>E-mail</th>
                                    <th>Excluir</th>
                                    </thead>tr>
                                    </thead>
                                </thead>
                            </table>

                            <tbody>
                                <tr>
                                    <td>{$row['id']}</td>
                                    <td>{$row['nome']}</td>
                                    <td>{$row['sobrenome']}</td>
                                    <td>{$row['email']}</td>
                                    <td>
                                        <form action='excluirCadastro.php' method='post'>
                                            <input type='hidden' name='id' value='{$row['id']}'>
                                            <input type='submit' id='btn-excluir' value='&#x1f5d1'>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                                                        ";
                        } else{
                            echo "<div class='mensagem erro'>$email não encontrado</div>";
                        }
                        //echo $stmt->get_result()->fetch_assoc();
                    }
                }

            ?>

        </section>
        
    </main>
</body>
</html>