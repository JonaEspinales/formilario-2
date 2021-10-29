//Definir un arreglo con sus comidas favoritas.
const comida = [
    "Encebollado",
    "Ceviche",
    'Casuela',
    function(){
        return "Orden Generada"
    }
]

const otrasComidas = [
    "Apanado",
    "lasaña"
]

const combinarComida = [
    ...comida, ...otrasComidas
]
console.log(combinarComida)