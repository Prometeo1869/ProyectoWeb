function enviarDatos() {
    let suma = parseInt(0);
    let resueltos = parseInt(0);
    let lista = document.getElementsByTagName("input");
    for(let i = 0;i < lista.length;i++) {
        if (lista[i].checked){
            suma = suma + parseInt(lista[i].value);
            resueltos = resueltos + 1;
        }
    }
    if(resueltos < 15) {
        alert("Marca todas las preguntas");
    } else {
        let nota = parseFloat(suma / resueltos) * 10;
        document.getElementById('nota').innerHTML = `<h5>Nota: ${nota.toFixed(2)}</h5>`;
        document.getElementById('aciertos').innerHTML = `<h5>Aciertos: ${suma} / ${resueltos}</h5>`;
        document.getElementById('cuestionario').style.display = "none";
        document.getElementById('enviar_formulario').style.display = "none";
        document.getElementById('titulo1').style.display = "none";
        document.getElementById('puntuacion').style.display = "flex";
        document.getElementById('mensaje_aprobado').style.display = "block";
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