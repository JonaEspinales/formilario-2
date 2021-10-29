// forma recursiva
//Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando
//recursividad.
function escribirTablaMultiplicar(j){

	console.log("<h2>Tabla de multiplicar del "+ j +"</h2>");
	for(i = 12;i>=1;i--){
		console.log(j + "x " + i + "= " + j * i);
	}
}
escribirTablaMultiplicar(8);