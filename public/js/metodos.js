function desaparece(id) {
    document.getElementById(id).style.display = 'none';
    
}
function aparece(id) {
    let x, y, i;
    x = document.getElementsByClassName('card');
    for(i = 0; i < x.length; i++){
        x[i].style.display = 'none';
    }    
    y = document.getElementsByClassName(id);
    for(i = 0; i < x.length; i++){
        y[i].style.display = 'flex';
    }
}