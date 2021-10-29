const saludame = (nombre)=> console.log(`Hola ${nombre}`);
saludame("JOnathan Espinales");

function saludame1(nombre){
    return `Hola como estas ${nombre}`;
}

/// aqui mostramos la funcion

function mostrar(fn,parametro)
{
    console.log(fn(parametro));
}
mostrar(saludame1,'MIguel Sanchez');
