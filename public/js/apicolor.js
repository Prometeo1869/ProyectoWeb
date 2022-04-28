
let loading = document.getElementById('loading');
let hexadecimal = document.getElementById('hexadecimal');
let colores = document.getElementsByClassName('colores');

for (let i = 0; i < colores.length; i++) {
    colores[i].addEventListener('change', function () {
        console.log(document.getElementById('red'));
        console.log(document.getElementById('green'));
        console.log(document.getElementById('blue'));
        if (document.getElementById('red').value == '' || document.getElementById('green').value == '' ||
            document.getElementById('blue').value == '') {
            alert("Por favor, rellene los 3 campos correctamente");
        } else if (document.getElementById('red').value < 0 || document.getElementById('red').value > 255) {
            alert("Valores entre 0 y 255");
            document.getElementById('red').value = '';
            document.getElementById('red').focus();
        } else if (document.getElementById('green').value < 0 || document.getElementById('green').value > 255) {
            alert("Valores entre 0 y 255");
            document.getElementById('green').value = '';
            document.getElementById('green').focus();
        } else if (document.getElementById('blue').value < 0 || document.getElementById('blue').value > 255) {
            alert("Valores entre 0 y 255");
            document.getElementById('blue').value = '';
            document.getElementById('blue').focus();
        } else {
            loading.style.display = 'block';
            axios.get('https://apicolor.herokuapp.com/api/random/' + document.getElementById('red').value +
                '-' + document.getElementById('green').value + '-' + document.getElementById('blue').value,
                {
                    responseType: 'json'
                })
                .then(function (res) {
                    if (res.status == 200) {
                        console.log(res.data);
                        document.getElementById('hexadecimal').value = res.data.hex;
                        document.getElementById('respuesta').style.background = res.data.hex;
                    }
                    console.log(res);
                })
                .catch(function (err) {

                    console.log(err);
                    document.getElementById('hexadecimal').value = "ERROR";
                })
                .then(function () {
                    loading.style.display = 'none';
                });
        }
    });
}