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
    for(i = 0; i < x.length; i++){
        x[i].style.display = 'none';
    }    
    y = document.getElementsByClassName(clase);
    for(i = 0; i < x.length; i++){
        y[i].style.display = 'flex';
    }
}