import { bhask } from './bhaskaraModule.js';
import { clearElements, extractInputs, msg as mesg} from './Commonfn.js';

//Botones
var btnAplicar = document.getElementById('btnAplicar');
var btnLimpiar = document.getElementById('btnLimpiar');
var inputs = document.getElementsByTagName('input');

//Visual
var raices = document.getElementById('raices');
var soluciones = document.getElementById('soluciones');

//Eventos
btnAplicar.addEventListener('click', aplicarBhaskara);
btnLimpiar.addEventListener('click', limpiar);

//Agrego evento de validacion a cada input
for(let item of inputs){  item.addEventListener('keyup', validarInputs); }

//Estado de validacion de inputs
var ok = {'a':false, 'b':false, 'c':false};

//Limpia inputs, elementos con mensajes y reestablece el estado de validacion 
//De los inputs
function limpiar()
{   
    reestablecerOk();
    
    let e = [raices, soluciones];
    let inputs = extractInputs('numeros');
    
    for(let item of inputs){ e.push(item);}

    clearElements(e);
}

//Establece el estado de los inputs a false
function reestablecerOk()
{
    for (const prop in ok)
    {
        ok[prop] = false;
    }
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
 
function validarOk()
{
    for (const prop in ok) {
        if(ok[prop] == false){return false;}
    }

    return true;
}

function aplicarBhaskara()
{   
    //Limpio los mensajes 
    clearElements([raices, soluciones]);

    //Valido que los inputs esten validos para continuar
    if(!validarOk())
    {
        mesg('Complete o corrija los campos', soluciones);
        return;
    }

    let numeros = obtenerNumeros();
    let msg = '';
    let espacio = '&nbsp&nbsp&nbsp&nbsp';

    //Aplico la formula
    let solucion = bhask(numeros);

    //En caso de que a sea cero 
    if(solucion == false)
    {
        mesg('A debe ser diferente de cero', raices);
        return;
    }

    if(solucion.raices == null)
    {
        mesg('No tiene solucion en reales', raices);
        return;
    }

    //Asigno el mesanje
    msg = 'X1: ' + solucion.raices.x1;
    msg += espacio + 'X2: ' + solucion.raices.x2; 

    //Se muestran los mensajes
    mesg(msg, raices);
    mesg('Soluciones: ' + solucion.soluciones, soluciones);
}

//Validacion de inputs.
//Es numero, longitud menor a tres y diferente de cero
function validarInputs()
{
    let op = '';
    let len = this.value.trim().length;

    if(isNaN(this.value) || len > 3 || len == 0)
    {   
        op = '2px solid red';
        ok[this.id] = false;
        
    }else
    {
        op = '2px solid rgb(222, 184, 135)';
        ok[this.id] = true;
    }

    this.style.borderBottom = op;
}