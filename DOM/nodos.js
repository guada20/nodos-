/*//crear una etiqueta 
let h1 = document.createElement("h1");
//crear el texto a la etiqueta 
let texto=document.createTextNode("Titulo 1 ");
//agregar texto a la etiqueta
h1.appendChild(texto);
//seleccionar la etiqueta body
let body = document.body;
//agrgar la etiqueta h1 al cuerpo de la pagina
body.appendChild(h1);
//crear un enlace 
let a = document.createElement("a");
let txtA = document.createTextNode("Ir a youtube");
a.appendChild(txtA);
//agrgar atributos
a.setAttribute("href","https://youtube.com")
//seleccionar etiquetas del navegador
var h1etiqueta = document.querySelector("h1");
h1.appendChild(a);
//eliminar una etiqueta 
a.remove();
//agregar estilos a etiquetas 
h1etiqueta.style.color="red";
h1etiqueta.style.backgroundColor="pink";
*/
//seleccionando elementos desde js 
//para seleccionar 1 etiqueta se usa 
//query selector 
/*
let titulo = document.querySelector("p > span");
titulo.style.fontSize="50px";
titulo.style.color = "chocolate";
//para seleccioanr varias etiquetas 
//se usa querySelectorAll
let ps = document.querySelectorAll(".ps");
//ps[1].style.color = "red";
for(let x=0; x < ps.length; x++){
    ps[x].style.color = "red";
}
console.log(ps);
*/
let a = document.createElement("a");
let txtA = document.createTextNode("Ir a youtube");
a.appendChild(txtA);
//agrgar atributos
a.setAttribute("href","https://youtube.com");
a.setAttribute("target","_blank");
//seleccionar una etiqueta de referencia 
//poner la etiqueta a entre el titulo1 y el titulo2
let referenciah1 = document.querySelector("h1");
//ubicar etiqueta de enlace de acuerdo a la 
//etiqueta de referencia 
referenciah1.insertAdjacentElement("beforebegin",a);
