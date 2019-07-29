function discriminante(numeros)
{
    if(numeros.a == 0){ return false; }

    let d = Math.pow(numeros.b, 2) - 4*numeros.a*numeros.c;

    return d;
}

//Deja solo dos decimales en caso de no ser entero
function formato(n)
{
    //Lo convierto a string, separo parte entera de decimal
    //dejo solo dos decimales, y los vuelvo a unir
    let ns = n.toString();
    let nsplit = ns.split('.');
    let ndec = nsplit[1].substring(0, 2);
    
    let nn = nsplit[0] + '.' + ndec;
    
    return nn;
}

function getRaices(numeros)
{
    let x1 = (-numeros.b + numeros.raizd) / (2 * numeros.a); 
    let x2 = (-numeros.b - numeros.raizd) / (2 * numeros.a);
    
    x1 = Number.isInteger(x1) ? x1 : formato(x1); 
    x2 = Number.isInteger(x2) ? x2 : formato(x2); 

    return {x1, x2};
}


export function bhask(numeros)
{
    //Si a es cero no se hace.
    if(numeros.a == 0){ return false; }

    //Obtengo el discriminate, y guardo cuantas soluciones tiene.
    let d = discriminante(numeros);
    let soluciones = d == 0 ? 1 : d > 0 ? 2 : 0;

    if(d < 0)
    {
        return {'raices': null, 'soluciones': soluciones};
    }
    
    //Hago la raiz del discriminante 
    numeros.raizd = Math.sqrt(d);
    
    let raices = getRaices(numeros);

    return { 'raices':{'x1': raices.x1, 'x2': raices.x2}, 'soluciones': soluciones, 'discriminante': d};
    
}


