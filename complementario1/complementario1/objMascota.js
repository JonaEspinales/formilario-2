//Crear un objeto Mascota que tenga como parámetros Nombre, Edad y Color
const mascota={
    nombre: 'Betoben',
    edad : '3 anios',
    color: "blanco",
    getpersonalida(){
        return `${this.nombre} ${this.edad}`;
    }

}

function mostrarDatos({nombre,edad,color})
{
    console.log(nombre)
    console.log(edad)
    console.log(color)
}
mostrarDatos(mascota)