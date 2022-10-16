function logar() {
    const campos = document.querySelectorAll('.required');

    if (campos[0].value == "admin@admin.com" && campos[1].value == "admin" ){
        alert("Você está logado!");
        /* window.location.href = "page-logado.html" */
    }
    if (campos[0].value == ""){
        alert("Favor digitar o seu email!");
    } 
    if (campos[1].value == ""){
        alert("Favor digitar uma senha !");
    }
    else {
        alert("Login ou Senha Incorreto");
        
    }
}
