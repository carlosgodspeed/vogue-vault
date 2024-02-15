<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="cadastro-style.css">
    <link re="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <title>Document</title>
</head>

<body>

    <div>
        <header>
            <div class="logo">
                <h1>Vogue Vault</h1>
            </div><!--logo-->

            <div class="cabeçalho-link">
                <li>
                    <a href="../index.php ">Inicio</a><br>
                    <a href="../login/Login.php ">Login</a>
                </li>
            </div><!--cabeçalho-link-->
            <!--icon-->

            <div class="icon"><span><ion-icon name="bag-handle-outline"></ion-icon></span></div>
            <!--icon-->
        </header>
    </div><!--background-->

    <section>
        <div class="Container-card-1">
        <form class="form">
    <p class="title">Cadastre-se</p>
    <p class="message">Cadastre-se agora e tenha acesso total ao nosso aplicativo. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required="">
            <span>Firstname</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required="">
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required="">
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required="">
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required="">
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Já tem uma conta?<a href="../login/Login.php">Login</a> </p>
</form>
        </div>
    </section>

    <section>
        <h1>ESTOQUE NOVOS</h1>
        <div class="Container-roupas">
            <div class="roupa">
                <img src="../img/casaco-marron.png" alt="">
                <button style="font-size: 20px;">Comprar</button>
            </div><!--roupa-->

            <div class="roupa">
                <img src="../img/casaco-marron.png" alt="">
                <button style="font-size: 20px;">Comprar</button>
            </div><!--roupa-->

            <div class="roupa">
                <img src="../img/casaco-marron.png" alt="">
                <button style="font-size: 20px;">Comprar</button>
            </div><!--roupa-->

            <div class="roupa">
                <img src="../img/casaco-marron.png" alt="">
                <button style="font-size: 20px;">Comprar</button>
            </div><!--roupa-->
        </div><!--container-roupas-->
    </section>


    <div class="Marcas">
        <img src="../img/brand1.png" alt="Marca">
        <img src="../img/brand2.png" alt="Marca">
        <img src="../img/brand3.png" alt="Marca">
        <img src="../img/brand4.png" alt="Marca">
        <img src="../img/brand5.png" alt="Marca">
        <img src="../img/brand6.png" alt="Marca">
    </div><!--Marcas-->
    <br>
    <br>

    <script src="https://unpkg.com/scrollreveal"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="js/script.js"></script>
</body>

</html>