var nuevo = document.createElement('div');
var texto = document.createTextNode('Caja4');
nuevo.appendChild(texto);
nuevo.setAttribute("class","caja");
var padre = document.getElementsByTagName('body');
padre[0].appendChild(nuevo);