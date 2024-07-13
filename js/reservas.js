//Declaración de variables y constantes
const titulo = document.getElementById("title");
let form = document.getElementById("formulario");
const main = document.getElementById("mainReserva");
const divFormu = document.createElement("div");
const h4Form = document.createElement("h4");
const boton = document.getElementById("boton");
let turnosDispo = 10;
//Orden
//main.appendChild(form);
main.appendChild(divFormu);

//
main.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombreCompleto").value;
    const personas = document.getElementById("cantPersonas").value;
    const fecha = document.getElementById("diaJunio").value;
    const lugar = document.getElementById("ubicacion").value;
    //Local Storage
    localStorage.setItem('nombreCompleto', nombre);
    localStorage.setItem('cantPersonas', personas);
    localStorage.setItem('diaJunio', fecha);
    localStorage.setItem('lugar', lugar);
    h4Form.innerText = `Su reserva se ha registrado a nombre de ${nombre} para ${personas} personas, el día ${fecha} de Junio, en nuestro/a ${lugar}.`;
    divFormu.appendChild(h4Form);
});

//
boton.addEventListener('click', (e) => {
    Swal.fire({
        icon: "success",
        title: "Su reserva se ha registrado exitosamente",
        showConfirmButton: false,
        timer: 2000
    });
});
boton.addEventListener('click', () => {
    setTimeout( ()=> {
        Toastify(
            {
                text:"¡Sus datos están protegidos con nosotros!",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #527e65, #225c3b)",
                }
            }
        ).showToast();
    }, 3000)
});
//Style 

