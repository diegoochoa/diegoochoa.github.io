document.write("Hola desde JavaScript");

window.alert("Yo aqui dando lata");
console.log("Hola para la consola");

function printNumbers(max)
{
    for(var i=0 ; i<arreglo.length ; i++){
        document.writeln(arreglo[i]);
        document.write('<br>');
    }
}

var arreglo =[3,5,7];
printNumbers(arreglo);

var arreglo2 = new Array(9,11,13);
printNumbers(arreglo2);

/*Notacion literal de objetos*/

var triangulo ={
    base: 3,
    altura: 5,
    area: function()
    {
        console.log("area = "+this.base*this.altura/2);
    }
}