/* Logueo
usuario:joaquin
contraseña:1234 */

    function loguear(){
        let identificar = true;
        do {
            let usuario = prompt("ingresa tu usuario");
            if (usuario == null || usuario == "") { 
                alert("Usuario incorrecto");
                break;
            }
            if (usuario == "joaquin") {
                let pass = prompt("ingresa tu contraseña");
                if (pass == null) { 
                    break;
                }
                if (pass === "1234") {
                    alert("Bienvenido " + usuario);
                    identificar = false;
                } else {
                    alert("Contraseña incorrecta");
                }
            } else {
                alert("Usuario incorrecto");
            }
        } while (identificar);
    }
    

    loguear()