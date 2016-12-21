function alcanzoPromedio() {
	var PuntosSquad = parseInt(document.getElementById("puntosSquad").value);
	var MaxPuntos = parseInt(document.getElementById("maxPuntos").value);
    var frase;
    resultado=(PuntosSquad*100)/MaxPuntos;
    if(resultado>=80)
        { 
            document.getElementById("frase").innerHTML="<p class='frase'>Muy bien squad!</p>";
        }
    else
    {
        if(resultado<80)
            {
             document.getElementById("frase").innerHTML="<p class='frase'>Pueden hacerlo mejor.</p>";
            }
    }
    document.getElementById('resultado').value = resultado;
}

function limpiar(){
	 PuntosSquad = document.getElementById("puntosSquad").value="";
	 MaxPuntos = document.getElementById("maxPuntos").value="";
	 resultado = document.getElementById('resultado').value = "";
	var frase = document.getElementById("frase").innerHTML="";
}