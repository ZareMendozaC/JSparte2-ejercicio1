function costoPorLlamadas() {
	var num1 = parseInt(document.getElementById('n1').value);
	var num2 = parseFloat(document.getElementById('n2').value);
    document.getElementById('resultado').value = num1 * num2;
}


function alcanzoPromedio(puntosSquad, maxPuntos) {
    var resultado=0;
    resultado=(puntosSquad*100)/maxPuntos;
    if(resultado>80)
        {
            return("Muy bien squad!")
        }
    else
        if(resultado<80)
            {
            return("Pueden hacerlo mejor.")
            }
}
function sleeping(weekday, vacations) {
    weekday = Boolean(weekday);
    vacations = Boolean(vacations);
    if((weekday==false) || (vacations==true)){
        return 1;
    }
    else return 0;
}
function monkeyTrouble(aSmile, bSmile) {
    aSmile = Boolean(aSmile);
    bSmile = Boolean(bSmile);
    if((aSmile==true)&(bSmile==true))
        return 1; 
    if((aSmile==false)&(bSmile==false))
        return 1;
    else 
        return 0;
}
function diff21(n) {

if (n<21)
    return 21-n;
    else
        return 2*(n-21);
}
function parrotTrouble(talking, hora) {
    talking = Boolean(talking);
            
            if((hora<7||hora>20)&&(talking==true))
                return 1;
            else{
                return 0;
            }
        
}

function make10(a, b) {

        if(( ((a==10 && b!=10)) || ((a!=10 && b==10)) ) || (a+b==10))
            return 1;
        else 
        return 0;
}

function posNeg(a, b, negative) {
    negative = Boolean(negative);
    if( (a<0 && b>0) || (a>0 && b<0) )
        return 1;
    else 
        if( (negative==true)&& (a<0 && b<0) )
            return 1;
    else 
        return 0;
}