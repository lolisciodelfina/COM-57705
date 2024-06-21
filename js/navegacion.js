//declaracion de variables 
const cuerpoReserva = document.getElementById('bodyReserva'); 
const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

//agrupacion 
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ["Index", "Reservas", "Contacto"];

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}


//styles
cabecera.style.backgroundColor = 'pink';
















/*/Variables
const cuerpo = document.body;
const encabezado = document.getElementById('header');
const navegacion = document.createElement('div'); 
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Home", "Productos", "Contacto"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');
const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear();


encabezado.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';


ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'https://www.casagokotta.com/media/galleries/medium/ba390-Captura-de-pantalla-2022-09-17-a-las-11.54.05.png';
img.alt = 'GretaIcon';

liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = <a href="${link.toLowerCase()}.html" >${link}</a>;
    ul.appendChild(li);
}

encabezado.style.backgroundColor = '#C7B7A3';


footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = '#GretaBa' + TIME + ' | Los Polvorines';*/