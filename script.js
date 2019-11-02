function validarCampos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var sexo = document.getElementById("sexo").value;
    var fecha = document.getElementById("date").value;
    var eCivil = document.getElementById("eCivil").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var contador = document.getElementById("contador").value;



    if (nombre == ' ' || apellido == ' ' || sexo == ' ' || fecha == ' ' || eCivil == ' ' || tel == ' ' || email == ' ' || contador == ' ') {
        alert('Algunos de los campos requeridos estan vacios.');
    } else if (!/^([0-9])*$/.test(tel)) {
        alert("El valor " + tel + " no es un número de telefono valido.");
    } else verificarDatos();

}

function verificarDatos() {


    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var sexo = document.getElementById("sexo").value;
    var fecha = document.getElementById("date").value;
    var eCivil = document.getElementById("eCivil").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var contador = document.getElementById("contador").value;

    if (confirm("Los datos ingresados son: \nNombre: " + nombre +
            " \nApellido: " + apellido + " \nSexo: " + sexo + " \nFecha de nacimiento: " +
            fecha + " \nEstado Civil: " + eCivil + " \nTelefono de contacto: " + tel +
            " \nE-Mail: " + email + " \nCarta de presentacion:  \n" + contador + " \n  \n \n Son correctos?")) {
        validarFN();
    } else alert("Corrija sus datos, por favor.")
}


function validarFN() {

    var fechaej = document.getElementById("date").value;

    var fecha4 = fechaej.split('-');

    var dia = fecha4[2];
    var mes = fecha4[1];
    var año = fecha4[0];

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || año < 1900 || año > new Date().getFullYear()) {
        alert("Ingresa una fecha válida.");

        return false;
    } else {

        var fecha3 = new Date(año, mes - 1, dia);
        var fecha2 = new Date();

        fechafin = (fecha2.getTime() - fecha3.getTime()) / 1000 / 60 / 60 / 24 / 365;

        if (fechafin < 18) {

            alert("Para formar parte de nuestro staff debes ser mayor de edad.");
            /* document.getElementById("date").value = 0; */

            return false;

        } else location.href = "rrhhaprobado.html"
            /* window.location = "rrhhaprobado.html" */
    }


}


function contarcaracteres() {

    //Numero de caracteres permitidos
    var total = 500;

    setTimeout(function() {
        var valor = document.getElementById('contador');
        var respuesta = document.getElementById('res');
        var cantidad = valor.value.length;
        document.getElementById('res').innerHTML = cantidad + ' caractere/s, te quedan ' + (total - cantidad);
        if (cantidad > total) {
            respuesta.style.color = "red";
            alert("Superaste el limite de caracteres permitidos.");

        } else {
            respuesta.style.color = "black";
        }
    }, 10);

}