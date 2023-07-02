function procesarRespuestas(){
    let total = 3
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["a","a","b"];


    for (let i=1; i<= total; i++)
    {
        if(myForm["r"+i].value == null || myForm["r"+i].value == '')
        {
            alert("Debes responder a todas las preguntas para finalizar");
            return false;
        } else{
            if(myForm["r"+i].value == respuestasCorrectas[i -1])
            puntos++;
        }
    }
    let resultado = document.getElementById('resultado');

if (puntos === total) {
  resultado.innerHTML = '¡Felicitaciones! Obtuviste el puntaje máximo de ' + puntos + ' puntos de ' + total + ' puntos posibles.';
} else if (puntos === 2) {
  resultado.innerHTML = '¡Buen trabajo! Obtuviste ' + puntos + ' puntos de ' + total + ' puntos posibles.';
} else {
  resultado.innerHTML = 'Nos corcharon. Obtuviste ' + puntos + ' punto de ' + total + ' puntos posibles.';
}

return false;

}

function mostrarTexto(texto) {
    var contenido = document.getElementById("contenido");
    contenido.innerHTML = texto;
}

  