
let loading = document.getElementById('loading');
let hexadecimal = document.getElementById('hexadecimal');
let boton = document.getElementById('json_get');

    boton.addEventListener('click', function() {
        console.log(document.getElementById('red'));
        if (document.getElementById('red').value == '') {
            alert("Por favor, rellene el campos correctamente");
        } else {
            loading.style.display = 'block';
            axios.get('https://www.fruityvice.com/api/fruit/' + document.getElementById('red').value,
                {
                    responseType: 'json'
                })
                .then(function (res) {
                    if (res.status == 200) {
                        console.log(res.data);
                        document.getElementById('hexadecimal').value = res.data.name;
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
