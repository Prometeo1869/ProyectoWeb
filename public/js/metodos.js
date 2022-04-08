function soloSolteras() {
    this.aparece();
    document.getElementById('soltero').style.display = 'none';
    document.getElementById('resto').style.display = 'none';
    document.getElementById('vendedor').style.display = 'none';
}
function soloSolteros() {
    this.aparece();
    document.getElementById('soltera').style.display = 'none';
    document.getElementById('resto').style.display = 'none';
    document.getElementById('vendedor').style.display = 'none';
}
function soloVendedores() {
    this.aparece();
    document.getElementById('soltero').style.display = 'none';
    document.getElementById('resto').style.display = 'none';
    document.getElementById('soltera').style.display = 'none';
}
function aparece() {
    document.getElementById('soltera').style.display = 'flex';
    document.getElementById('soltero').style.display = 'flex';
    document.getElementById('resto').style.display = 'flex';
    document.getElementById('vendedor').style.display = 'flex';
}
