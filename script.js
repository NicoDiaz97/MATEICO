function validarFN() {
    var fn = document.getElementById("nacimiento").value;
    var fechaactual = new Date();
    var aact = fechaactual.getFullYear();
    var mact = fechaactual.getMonth() + 1;
    var dact = fechaactual.getDate();
    var nac = fn.split("-");
    if (aact - nac[0] >= 18) {

    } else alert("Sos menor anda a estudiar bobo.");
}