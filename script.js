function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Mensagem de Sucesso');
        /* location.href = "home.html"; */
    }else{
        alert('Usuário ou senha incorretos');
    }

}