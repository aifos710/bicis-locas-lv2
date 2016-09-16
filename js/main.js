function validateForm(){
    var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var name = document.getElementById("name").value;
	var form = document.getElementsByClassName("form-control").value;

    if(name == null || name.length == 0 || /^\s+$/.test(name)){
        var span = document.createElement("span");
        var referencia= document.getElementById("name");
        var father=referencia.parentNode;
        father.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresar su nombre");
        span.appendChild(texto);
        return span;
    }   else {
       var m = /^[a-zA-Z]*$/;
       if(!name.search(m)) {
            console.log("letra")
            m = /[a-z]/g;
        }    
        if(!name.search(m)){
            var span = document.createElement("span");
            var referencia= document.getElementById("name");
            var father=referencia.parentNode;
            father.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe ser maýuscula");
            span.appendChild(texto);
            return span;
        }
    }

    if(lastname == null || lastname.length == 0 || /^\s+$/.test(lastname)) {
        var span = document.createElement("span");
        var referencia= document.getElementById("lastname");
        var father=referencia.parentNode;
        father.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresar Apellido");
        span.appendChild(texto);
        return span;
    } else {
       var n = /^[a-zA-Z]*$/;
       if(!lastname.search(n)) {
            console.log("letra")
            n = /[a-z]/g;
        }    
        if(!lastname.search(n)){
            var span = document.createElement("span");
            var referencia= document.getElementById("lastname");
            var father=referencia.parentNode;
            father.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe ser maýuscula");
            span.appendChild(texto);
            return span;
        }
    }

    if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-email");
        var father=referencia.parentNode;
        father.insertBefore(span,referencia);
        var texto = document.createTextNode("Verificar su email");
        span.appendChild(texto);
        return span;
    } else if( password == null || password.length <= 6 || password == "password" || password == 123456 || password == 098754 || /^\s+$/.test(password) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var father=referencia.parentNode;
        father.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresar contraseña válida");
        span.appendChild(texto);
        return span;
    } 
}






