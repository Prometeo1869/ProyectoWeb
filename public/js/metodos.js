/*HACE DESAPARECER LA ETIQUETA AL PARAMETRO ID="id"*/
function desaparece(id) {
    document.getElementById(id).style.display = 'none';

}
/*FILTRO DE <DIV class="card">, PRIMERO LOS QUITA TODOS Y LUEGO 
PONE LOS QUE CORRESPONDAN AL PARAMETRO CLASS="clase"
LAS VARIABLE x, y -> ARRAY CON CADA ELEMENTO*/
function aparece(clase) {
    let x, y, i;
    x = document.getElementsByClassName('card');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    y = document.getElementsByClassName(clase);
    for (i = 0; i < x.length; i++) {
        y[i].style.display = 'flex';
    }
}
/*TABLAS USANDO XML*/
    /*FUNCION PARA LEER EL DOCUMETO XML*/
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open("GET", "musica.xml", true);
    xmlhttp.send();
}
    /*RELLENA LA TABLA CON LOS DATOS XML*/
function myFunction(xml) {
    var x, i, xmlDoc, table;

    xmlDoc = xml.responseXML;
    table = "<tr><th>Artista</th><th>Titulo</th><th>Año</th></tr>";
    x = xmlDoc.getElementsByTagName("disco");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue + "</td>" + "<td>" +
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td>" + "<td>" +
            x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td></tr>";

    }
    document.getElementById("tabla1").innerHTML = table;
}