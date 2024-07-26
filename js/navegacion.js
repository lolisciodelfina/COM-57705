//declaracion de constantes index
const cuerpoReserva = document.getElementById ('body');
const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Index", "Reservas", "Productos"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const origen = document.createElement('a');
const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear();

cabecera.className= 'cabecera';

//agrupacion 
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(liImagen);
liImagen.appendChild(origen);
origen.appendChild(img);

navegacion.className = 'navbar';
origen.href = "/";
img.src = 'img/LOGO INICIO.jpg';
img.alt = 'Espresso';

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}


//footer
footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = "#EspressoCafe " + TIME + "| Los Polvorines";

//------------------------------------------styles
//header
cabecera.style.backgroundColor = '#F3FEB8';
img.width = 90;
img.height = 80;

//footer
footer[0].style.backgroundColor = '#225c3b';
parrafoFooter.style.color = 'white';

