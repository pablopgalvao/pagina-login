function logar() {
    const campos = document.querySelectorAll('.required');
    let email = document.getElementById("email");

    if (campos[0].value == "admin@admin.com" && campos[1].value == "admin" ){
        alert("Você está logado!")
        return;
        /* window.location.href = "page-logado.html" */
    }
    if (campos[0].value == "" && campos[1].value == ""){
        alert("Favor preencher todos os campos!")
        return;
    } 
    if (campos[0].value == "" && validatorEmail(email.value) === true){
        alert("Favor digitar o seu email!")
        return;
    } 
    else if (campos[1].value == ""){
        alert("Favor digitar uma senha !")
        return;
    }
    else {
        alert("Login ou Senha Incorreto");
        
    }
}
function validatorEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }
