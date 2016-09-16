function validateForm(){
    var x = document.getElementById("name").value;
    var d = document.getElementById("lastname").value;
    var cuadroNegro = document.getElementsByClassName("input-box")[2];
    if (x, d == null || x, d == "") {
        alert("Datos requeridos");
        return false;
    };
    //password
    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(email) ){
        alert("Error: La dirección de correo " + email + " no es valida.");
    }

    var pass = document.getElementById("input-password").value;
        if(pass.length < 5 ){
            alert("Contraseña  debe tener al menos 6 caracteres");
        }else if(pass == "123456" || pass =="password" || pass == "098754"){
            alert("Ingresar contraseña valida");
        }
    var bici = document.getElementsByTagName("select")[0].value;
    if ( bici == 0){
            alert("Seleccionar tu tipo de bici");
    }

    if (d.charAt(0) == d.charAt(0).toLowerCase() || x.charAt(0) == x.charAt(0).toLowerCase()){
       alert("La primera letra debe ser Mayuscula");
    }
    else{
        return true;
    }
}






