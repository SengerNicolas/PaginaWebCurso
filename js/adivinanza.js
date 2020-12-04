const deseo = prompt("Desea jugar? Ingrese ¨si¨ en caso de querer, o apriete Cancelar en caso contrario");
var intentos = 1;
var respuestaIncorrecta = 0;
var respuesta = 1;

if (deseo == "si") {

    while (intentos < 5 && respuesta != "tortuga") {

        if (respuestaIncorrecta == 2) {
            alert("Pista : tiene 4 patas")
        }
        if (respuestaIncorrecta == 3) {
            alert("Pista : tiene caparazon")
        }

        respuesta = prompt("¿En que animal estoy pensado?")

        if (respuesta == "tortuga") {

            alert("Respuesta Correcta")

        }else{

            alert("respuesta Incorrecta")
            respuestaIncorrecta++;
        }

        intentos++;
    }
    
if (intentos >= 5) {

    alert("Se acabaron las oportunidades")
    
}

}else{

    alert("Error");

}
