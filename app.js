let invitados =[];
let guitarristas =[];

const edad_minima = 18;

function registro_personas() {
    let nombre = prompt("Bienvenidos al show del local. Para poder ingresar te vamos a pedir primero tu nombre.");
    let edad = parseInt(prompt("Qué edad tenés?"));

if (edad < edad_minima) {
    alert ("Lo siento " + nombre + ", sos menor de edad y no podes entrar al local");
} else ("Bienvenido " + nombre + "Podes entrar al local"); 
invitados.push(nombre);

if (edad >= 18 && edad <= 30) {
    let tocar_guitarra = confirm ("Sabes tocar la guitarra?");
    if (tocar_guitarra) {
    alert ("Todo excelente " + nombre + "! Vas a entrar a un sorteo para poder tocar con Catriel y Paco Amoroso en una canción!");
    guitarristas.push(nombre);
    }
}
} 

let continuar;

do {
    registro_personas();
    continuar = confirm("Quéres registrar a más personas?"); 
} while (continuar);

//Resultados finales en el registro de personas.

alert ("Personas totales: " + invitados.join(","));
alert ("Guitarristas que participan al sorteo: " + guitarristas.join(","));


console.log (invitados,guitarristas)