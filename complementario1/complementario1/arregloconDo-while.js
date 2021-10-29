//Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.
const comida = [
    {comida:'Encebollado'}, {comida:'Ceviche'},{comida:'Casuela'}
    ]
    let iterador=0;
    do
    {
    console.log(comida[iterador]);
    iterador++;
    }
    while (iterador< comida.length)