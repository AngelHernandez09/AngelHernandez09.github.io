const empezarJuego = document.querySelector('.empezarJuego');
const botones = document.querySelector('.botones');
const intento = document.querySelector('.intento');
let contadorIntentos = 1, intentoActual = 50, maxRango = 100, minRango = 1, muyBajo, muyAlto, finJuego;

function empezarJ(){
    empezarJuego.hidden = true;
    muyBajo = document.createElement('button');
    muyAlto = document.createElement('button');
    finJuego = document.createElement('button');
    muyBajo.textContent = 'Muy bajo';
    muyAlto.textContent = 'Muy alto';
    finJuego.textContent = '¡Ese es!';
    intento.textContent = intentoActual;
    botones.appendChild(muyBajo);
    botones.appendChild(finJuego);
    botones.appendChild(muyAlto);
    muyBajo.addEventListener('click',adivinarBajo);
    muyAlto.addEventListener('click',adivinarAlto);
    finJuego.addEventListener('click',finalJuego);
}
empezarJuego.addEventListener('click', empezarJ);

function intentos (){
    if(contadorIntentos < 10){
        intentoActual = parseInt((maxRango + minRango)/2);
        intento.textContent = intentoActual;
    }else{
        finalJuego();
    }contadorIntentos++;
}

function adivinarBajo(){
    minRango = intentoActual;
    intentos();
}

function adivinarAlto(){
    maxRango = intentoActual;
    intentos();
}

function finalJuego(){
    contadorIntentos = 1;
    minRango = 1;
    maxRango = 100;
    intentoActual = 50;
    empezarJuego.hidden = false;
    muyBajo.parentNode.removeChild(muyBajo);
    muyAlto.parentNode.removeChild(muyAlto);
    finJuego.parentNode.removeChild(finJuego);
}