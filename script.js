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