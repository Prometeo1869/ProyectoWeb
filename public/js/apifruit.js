let loading = document.getElementById('loading');
let respuesta = document.getElementById('respuesta');
let boton = document.getElementById('json_get');

boton.addEventListener('click', function () {
    console.log(document.getElementById('fruta'));
    if (document.getElementById('fruta').value == '') {
        alert("Por favor rellene el campo fruta correctamente");
    } else {
        loading.style.display = 'block';
        axios.get('https://www.fruityvice.com/api/fruit/' + document.getElementById('fruta').value,
            {
                responseType: 'json'
            })
            .then(function (res) {
                if (res.status == 200) {
                    console.log(res.data);
                    respuesta.innerHTML = res.data.name;
                }
                console.log(res);
            })
            .catch(function (err) {

                console.log(err);
                respuesta.innerHTML = "La fruta que busca no se encuentra en nuestra base de datos";
            })
            .then(function () {
                loading.style.display = 'none';
            });
    }
});