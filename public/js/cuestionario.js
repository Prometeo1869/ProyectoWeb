function enviarDatos() {
    let suma = parseInt(0);
    let resueltos = parseInt(0);
    let lista = document.getElementsByTagName("input");
    for(var i = 0;i < lista.length - 1;i++){
        if (lista[i].checked){
            suma = suma + parseInt(list[i].value);
            resueltos = resueltos + 1;
        }
    }
    if(resueltos < 20) {
        alert("Marca todas las preguntas");
    } else {
        let nota = parseFloat(suma / resueltos) * 10;
        document.getElementById('nota').innerHTML = "Nota: " + nota.toFixed(2);
        document.getElementById('aciertos').innerHTML = "Aciertos" + suma + "/" + resueltos
        document.getElementById('cuestionario').style.display = "none";
        document.getElementById('enviar_formulario').style.display = "none";
        document.getElementById('puntuacion').style.display = "block";
    }
}

$(document).ready(function() {

    $(".form-wrapper .button").click(function(){
        let button = $(this);
        let currentSection = button.parents(".section");
        let currentSectionIndex = currentSection.index();
        let headerSection = $('.steps li').eq(currentSectionIndex);
        currentSection.removeClass("is-active").next().addClass("is-active");
        headerSection.removeClass("is-active").next().addClass("is-active");

        if(currentSectionIndex === 3){
            $(document).find(".form-wrapper .section").first().addClass("is-active");
            $(document).find(".steps li").first().addClass("is-active");
        }
    });
});