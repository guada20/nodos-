//punto 1 js 
let h1 = document.createElement("h1");
let textoH1 = document.createTextNode("My presentation");
h1.appendChild(textoH1);
//seleccionar el div existente
let div = document.querySelector(".uno");
div.insertAdjacentElement("beforebegin",h1);
//punto 2 
let p2 = document.createElement("p");
let textop = document.createTextNode("my best friend is mickey");
p2.appendChild(textop);
let p1 = document.querySelector(".uno p");
p1.insertAdjacentElement("afterend",p2);
//punto3
let etiquetah1 = document.querySelector("h1");
etiquetah1.style.color="red";
let etiquetap2 = document.querySelector("div p + p");
etiquetap2.style.fontWeight = "bold";
etiquetap2.style.backgroundColor="green";
//punto 4
let ol = document.querySelector("ol");
let lis =document.querySelectorAll("ol li");
let ul = document.createElement("ul");
for(let x=0; x < lis.length; x++){
    ul.appendChild(lis[x]);
}
ol.replaceWith(ul);
//punto 5
etiquetah1.classList.add("estilos");
//eliminar
lis[3].remove();
