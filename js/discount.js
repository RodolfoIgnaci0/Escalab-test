document.addEventListener("DOMContentLoaded", function(event){

    const mes = 10000;
    document.getElementById("mescost").innerHTML = '$' + mes;

    // new Intl.NumberFormat('es-CL').format(variable) agrega el formato con punto a montos
    var tricost = mes * 3 - 1000 * 3;
    document.getElementById("tricost").innerHTML = '$' + new Intl.NumberFormat('es-CL').format(tricost);
    document.getElementById("tritotal").innerHTML = 'Descuento $' + new Intl.NumberFormat('es-CL').format(1000 * 3);

    var semcost = mes * 6 - 1000 * 6;
    document.getElementById("semcost").innerHTML = '$' + new Intl.NumberFormat('es-CL').format(semcost);
    document.getElementById("semtotal").innerHTML = 'Descuento $' + new Intl.NumberFormat('es-CL').format(1000 * 6);

    var anucost = mes * 12 - 1000 * 12;
    document.getElementById("anucost").innerHTML = '$' + new Intl.NumberFormat('es-CL').format(anucost);
    document.getElementById("anutotal").innerHTML = 'Descuento $' + new Intl.NumberFormat('es-CL').format(1000 * 12);
});