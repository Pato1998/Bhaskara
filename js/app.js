import { bask } from './baskaraModule.js';
import { clearElements, extractInputs } from './Commonfn.js';

var btnAplicar = document.getElementById('btnAplicar');
var btnLimpiar = document.getElementById('btnLimpiar');

var raices = document.getElementById('raices');
var soluciones = document.getElementById('soluciones');


btnAplicar.addEventListener('click', aplicarBaskara);
btnLimpiar.addEventListener('click', clear);

function clear()
{   
    let e = [raices, soluciones];
    let inputs = extractInputs('numeros');
    
    for(let item of inputs){ e.push(item);}

    clearElements(e);
}

function obtenerNumeros()
{
    let n = {};
    let inputs = extractInputs('numeros');

    for(let item of inputs)
    {
        n[item.id] = Number(item.value);
    }

    return n;
}

function mensajes(msg, place)
{

}

function aplicarBaskara()
{   
    let numeros = obtenerNumeros();
    let msg = '';
    let espacio = '&nbsp&nbsp&nbsp&nbsp';

    let solucion = bask(numeros);
    console.log(solucion);
    soluciones.innerHTML = "";

    if(solucion == false)
    {
        msg = 'A debe ser diferente de cero';
        raices.innerHTML = msg;
        return;
    }
    
    soluciones.innerHTML = 'Soluciones: ' + solucion.soluciones;

    if(solucion.raices == null)
    {
        msg = 'No tiene solucion en reales';
        raices.innerHTML = msg;
        return;
    }

    msg = 'X1: ' + solucion.raices.x1;
    msg += espacio + 'X2: ' + solucion.raices.x2; 
    raices.innerHTML = msg;

}