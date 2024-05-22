//variables//
let turnosDispo=10;
//variables globales para utilizar en la función//
let patio = 0;
let salon = 0;
let terraza = 0;
//calcula la cantidad de lugares reservados en cada sector : patio, salón y terraza//
function lugares(lugar, nombreLugar){
    lugar++;
    console.log("Hay " + lugar + " lugares ocupados en el/la " + nombreLugar);
}

while(turnosDispo>0){
    alert ("Quedan " + turnosDispo + " turnos disponibles para Junio...")
    console.log(turnosDispo);
    let nombre=prompt("Ingrese su nombre completo, teniendo en cuenta que con él deberá recepcionarse:");
    while(nombre === "" || nombre == null){
        nombre=prompt("Ingrese su nombre completo, teniendo en cuenta que con él deberá recepcionarse:");
    }
    let cantPersonas=prompt("Ingrese la cantidad de personas para la reserva:");
    while(cantPersonas === "" || cantPersonas == null){
        cantPersonas=prompt("Ingrese la cantidad de personas para la reserva:");
    }
    let diaJunio=prompt("Ingrese el día de Junio que quiere reservar:");
    while(diaJunio === "" || diaJunio == null || diaJunio<1 || diaJunio>30){
        diaJunio=prompt("El número ingresado es incorrecto, ingrese el día de Junio que quiere reservar:");
    }
    let ubicacion=prompt("Indique si desea ubicarse en nuestro patio, salón o terraza:");
    while (ubicacion === "" || ubicacion == null || ubicacion!="patio" && ubicacion!="salon" && ubicacion!="terraza"){
        ubicacion=prompt("La ubicacion ingresada es incorrecta, indique si desea ubicarse en nuestro patio, salón o terraza:");
    }
    if (ubicacion === "patio"){
        alert( "Su reserva se ha registrado a nombre de " + nombre + ", para " + cantPersonas + " personas, el día " + diaJunio + " de Junio, en nuestro patio.");
        lugares(patio, "patio");
    }else{
        if (ubicacion === "salon"){
            alert("Su reserva se ha registrado a nombre de " + nombre + ", para " + cantPersonas + " personas, el día " + diaJunio + " de Junio, en nuestro salón.");
            lugares(salon, "salón");
        }else{
            alert("Su reserva se ha registrado a nombre de " + nombre + ", para " + cantPersonas + " personas, el día " + diaJunio + " de Junio, en nuestra terraza.");
            lugares(terraza, "terraza");
        }
    }
    turnosDispo--;
}
alert ("Lo sentimos, ya no tenemos disponibilidad para Junio, gracias por querer reservar con nosotros!");