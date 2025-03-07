// --Gonzalo Nicolas Vidal--
//Ejercicios de JavaScript
//JavaScript 2 (30 ejercicios):

//1) Imprime los números del 1 al 10
for (let z = 1; z <= 10; z++) {
    console.log(z);
}

//2) Imprime los números pares del 2 al 20
for (let z = 2; z <= 20; z += 2) {
    console.log(z);
}

//3) Imprime los números impares del 1 al 19
for (let z = 1; z <= 19; z += 2) {
    console.log(z);
}

//4) Imprime los números del 10 al 1 en orden inverso
for (let z = 10; z >= 1; z--) {
    console.log(z);
}

//5) Imprime los números del 1 al 10, pero se detiene al llegar al 5
for (let z = 1; z <= 10; z++) {
    if (z === 5) break;
    console.log(z);
}

//6) Imprime los números del 1 al 10, pero salta el 5
for (let z = 1; z <= 10; z++) {
    if (z === 5) continue;
    console.log(z);
}

//7) Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
function decirNombre(nombre) {
    alert("Hola " + nombre);
}

//8) Crea una función llamada saludar(nombre) y nos devuelva un string “Hola “ + nombre y luego invoca la función dentro de una alerta
function saludar(nombre) {
    return "Hola " + nombre;
}
alert(saludar("Carlos"));

//9) Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
function sumar(a, b) {
    return a + b;
}

//10) Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
function restar(a, b) {
    return a - b;
}

//11) Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b)
function calcular(operación, a, b) {
    if (operación === "+") {
        return sumar(a, b);
    } else if (operación === "-") {
        return restar(a, b);
    } else {
        return null;
    }
}

//12) Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
function contarHasta(numero) {
    for (let z = 1; z <= numero; z++) {
        console.log(z);
    }
}

//13) Pregúntale al usuario si desea usar la calculadora
let respuesta = prompt("¿Deseas usar la calculadora? (SI/NO)");

while (respuesta === "SI") {
    let num1 = parseFloat(prompt("Ingresa el primer número"));
    let num2 = parseFloat(prompt("Ingresa el segundo número"));
    let operacion = prompt("Ingresa la operación (+ o -)");

    let resultado = calcular(operacion, num1, num2);
    alert("El resultado es: " + resultado);

    respuesta = prompt("¿Deseas usar la calculadora nuevamente? (SI/NO)");
}
alert("El programa ha finalizado");

//14) Hacer un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66……
for (let z = 1; z <= 25; z++) {
    console.log(z * 11);
}

//15) Hacer un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
let pares = 0;
let impares = 0;

for (let z = 0; z < 5; z++) {
    let num = parseInt(prompt("Ingresa un número entero"));
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Pares: " + pares);
console.log("Impares: " + impares);

//16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
let totalAlturas = 0;
for (let z = 0; z < 5; z++) {
    let altura = parseFloat(prompt("Ingresa la altura de la persona " + (z + 1)));
    totalAlturas += altura;
}
let promedio = totalAlturas / 5;
console.log("La altura promedio es: " + promedio);

//17) Promedio de edades por turno
let edadesManana = [];
let edadesTarde = [];
let edadesNoche = [];

for (let z = 0; z < 5; z++) {
    edadesManana.push(parseInt(prompt("Ingresa la edad del estudiante del turno mañana")));
}
for (let z = 0; z < 6; z++) {
    edadesTarde.push(parseInt(prompt("Ingresa la edad del estudiante del turno tarde")));
}
for (let z = 0; z < 11; z++) {
    edadesNoche.push(parseInt(prompt("Ingresa la edad del estudiante del turno noche")));
}

let promedioManana = edadesManana.reduce((a, b) => a + b, 0) / edadesManana.length;
let promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;
let promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

console.log("Promedio turno mañana: " + promedioManana);
console.log("Promedio turno tarde: " + promedioTarde);
console.log("Promedio turno noche: " + promedioNoche);

let mayorPromedio;
if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
    mayorPromedio = "mañana";
} else if (promedioTarde > promedioNoche) {
    mayorPromedio = "tarde";
} else {
    mayorPromedio = "noche";
}

console.log("El turno con el promedio de edades más alto es: " + mayorPromedio);

//18) Se realiza la carga de 10 valores enteros por teclado
let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;

for (let z = 0; z < 10; z++) {
    let num = parseInt(prompt("Ingresa un número"));
    if (num < 0) {
        negativos++;
    } else if (num > 0) {
        positivos++;
    }
    if (num % 15 === 0) {
        multiplos15++;
    }
    if (num % 2 === 0) {
        sumaPares += num;
    }
}

console.log("Cantidad de negativos: " + negativos);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de múltiplos de 15: " + multiplos15);
console.log("Suma de pares: " + sumaPares);

//19) Hacer un programa que lea los lados de 4 triángulos
let equilateros = 0, isosceles = 0, escalenos = 0;

for (let z = 0; z < 4; z++) {
    let lado1 = parseInt(prompt("Ingresa el primer lado"));
    let lado2 = parseInt(prompt("Ingresa el segundo lado"));
    let lado3 = parseInt(prompt("Ingresa el tercer lado"));

    if (lado1 === lado2 && lado2 === lado3) {
        equilateros++;
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        isosceles++;
    } else {
        escalenos++;
    }
}

console.log("Triángulos equiláteros: " + equilateros);
console.log("Triángulos isósceles: " + isosceles);
console.log("Triángulos escalenos: " + escalenos);

if (equilateros <= isosceles && equilateros <= escalenos) {
    console.log("Menor cantidad: equiláteros");
} else if (isosceles <= escalenos) {
    console.log("Menor cantidad: isósceles");
} else {
    console.log("Menor cantidad: escalenos");
}

//20) Hacer una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
function mostrarRango() {
    let menor = parseInt(prompt("Ingresa el número menor"));
    let mayor = parseInt(prompt("Ingresa el número mayor"));
    
    if (menor > mayor) {
        [menor, mayor] = [mayor, menor];  // Intercambiamos si el orden es incorrecto
    }
    
    for (let z = menor; z <= mayor; z++) {
        console.log(z);
    }
}

//21) Hacer una función que reciba tres enteros y retorne el promedio.
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
}

//22) Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
function sumarValores() {
    let suma = 0;
    for (let z = 0; z < 5; z++) {
        let valor = parseInt(prompt("Ingresa un valor"));
        suma += valor;
    }
    return suma;
}

//23) Hacer una función que envíe una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final.
function agregarExclamacion(palabra) {
    return "!¡" + palabra + "!¡";
}

//24) Definir una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores.
function obtenerNombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

//25) Definir una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas.
function convertirHorasEnSegundos(horas) {
    return horas * 3600;
}

//26) Definir una función generarEmail que reciba como argumentos dos string usuario y dominio y elabore un string email con el formato usuario@dominio.com.
function generarEmail(usuario, dominio) {
    return usuario + "@" + dominio + ".com";
}

//27) Necesitamos un programa que pida ingresar una cantidad de grados Celsius y muestre la conversión de grados Celsius a grados Fahrenheit.
let gradosCelsius = parseFloat(prompt("Ingresá una cantidad de grados Celsius"));
let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
console.log(`La conversión de ${gradosCelsius} grados Celsius a Fahrenheit es: ${gradosFahrenheit}`);

//28) Necesitamos un programa que pida ingresar la distancia de un recorrido y calcule cuánto tiempo tardaría en completar el recorrido en bicicleta, a pie y en auto.
let distancia = parseFloat(prompt("Ingresá la distancia del recorrido en kilómetros"));

let resultadoEnBicicleta = distancia / 10;  // 10 km/h en bicicleta
let resultadoAPie = distancia / 5;         // 5 km/h a pie
let resultadoEnAuto = distancia / 50;      // 50 km/h en auto

console.log(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`);

//29) Definir una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no.
function puedeVerPelicula(edad, tieneAutorizacion) {
    return edad >= 16 || tieneAutorizacion;
}

//30) Definir una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
function esVocal(letra) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(letra.toLowerCase());
}
