<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar Nota</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
    
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="verificarUsuario.php">Procurar Usuário</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section id="containerSection">
            <form action="atualizarNota" method="post">
                <select name="curso" id="curso" class="estilo">
                    <option value="ads">Analisee Desenvolvimento de Sistema</option>
                    <option value="es">Engenharia de Software</option>
                    <option value="si">Sistema da Informação</option>
                    <option value="cc">Ciências da Computação</option>
                </select>
                <input type="submit" value="Buscar">
            </form>
        </section>

        <section>

            <?php
                //Verificar se o $_POST["curso] está preenchido
                if (isset($_POST["curso"])) {
                    
                    //Conexão com o Banco de Dados
                    include("../conexao/conexao.php");
                    $curso = $_POST["curso"];

                    //Preparando a consulta SQL
                    $sql = "SELECT * FROM usuarios WHERE curso = ?";
                    $stmt = $conn->prepare($sql);

                    if ($stmt) {

                        $stmt->bind_param("s", $curso);
                        $stmt->execute();

                    }

                }

            ?> 

        </section>
    </main>

</body>
</html>