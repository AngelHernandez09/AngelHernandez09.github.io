const empezarJuego = document.querySelector('.empezarJuego');
const botones = document.querySelector('.botones');
const intento = document.querySelector('.intento');
let contadorIntentos = 1, intentoActual = 500, maxRango = 1001, minRango = 0, muyBajo, muyAlto, ganarJuego, perderJuego;

empezarJuego.addEventListener('click', empezarJ);

function empezarJ(){
    empezarJuego.hidden = true;
    muyBajo = document.createElement('button');
    muyAlto = document.createElement('button');
    ganarJuego = document.createElement('button');
    muyBajo.textContent = 'Muy bajo';
    muyAlto.textContent = 'Muy alto';
    ganarJuego.textContent = '¡Ese es!';
    intento.textContent = intentoActual;
    botones.appendChild(muyBajo);
    botones.appendChild(ganarJuego);
    botones.appendChild(muyAlto);
    muyBajo.addEventListener('click',adivinarBajo);
    muyAlto.addEventListener('click',adivinarAlto);
    ganarJuego.addEventListener('click',ganar);
}

function intentos (){
    intentoActual = Math.floor((maxRango + minRango)/2);
    intento.textContent = intentoActual;
    contadorIntentos++;
    if(contadorIntentos === 10){
        muyBajo.parentNode.removeChild(muyBajo);
        muyAlto.parentNode.removeChild(muyAlto);
        perderJuego = document.createElement('button');
        perderJuego.textContent = 'No es ese :/';
        botones.appendChild(perderJuego);
        perderJuego.addEventListener('click',perder);
    }
    console.log("max: " + maxRango + " min: " + minRango + " actual: " + intentoActual + " intentos: " + contadorIntentos);
}

function adivinarBajo(){
    minRango = intentoActual;
    //console.log("min " + minRango);
    intentos();
}

function adivinarAlto(){
    maxRango = intentoActual;
    //console.log("max " + maxRango);
    intentos();
}

function ganar(){
    intento.textContent = 'Intentos hechos: ' + contadorIntentos;
    finalJuego();
}

function perder(){
    intento.textContent = '¡Estas haciendo trampa!';
    finalJuego();
}

function finalJuego(){
    if(contadorIntentos === 10){
        ganarJuego.parentNode.removeChild(ganarJuego);
        perderJuego.parentNode.removeChild(perderJuego);
    }else{
        muyBajo.parentNode.removeChild(muyBajo);
        muyAlto.parentNode.removeChild(muyAlto);
        ganarJuego.parentNode.removeChild(ganarJuego);
    }
    contadorIntentos = 1;
    minRango = 0;
    maxRango = 1001;
    intentoActual = 500;
    empezarJuego.hidden = false;
}