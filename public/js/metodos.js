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
    /*FUNCION PARA CARGAR EL DOCUMETO XML
    PARAMETRIZAR archivoXML CON EL .xml QUE QUERAMOS CARGAR*/
function loadXMLDoc(archivoXML) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            rellenarTabla(this);
        }
    };

    xmlhttp.open("GET", archivoXML, true); 
    xmlhttp.send();
}
    /*RELLENA LA TABLA CON LOS DATOS XML*/
function rellenarTabla(xml) {
    let x, i, xmlDoc, table;

    xmlDoc = xml.responseXML;
    table = "<thead><tr><th>CULTIVO</th><th>SEMILLA</th><th>CRECIMIENTO</th><th>RENTABILIDAD</th></tr></thead><tbody>";
    x = xmlDoc.getElementsByTagName("disco");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td><img>" +
            x[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + "</img><p>" + 
            x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue + "</p></td><td><p>" +
            x[i].getElementsByTagName("tienda")[0].childNodes[0].nodeValue + "</p><p>" +
            x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue + "</p></td><td><p>" +
            x[i].getElementsByTagName("dias")[0].childNodes[0].nodeValue + "</p><p>" +
            x[i].getElementsByTagName("recosecha")[0].childNodes[0].nodeValue + "<p></td><td><p>" +
            x[i].getElementsByTagName("rentabilidad")[0].childNodes[0].nodeValue + "</p><p>" +
            x[i].getElementsByTagName("comentario")[0].childNodes[0].nodeValue + "</p></td></tr>";

    }
    table += "</tbody>"
    document.getElementById("tabla1").innerHTML = table;
}