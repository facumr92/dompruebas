//const elemento = document.getElementById("resultado");

//Guardo elementos del DOM en variables
const num1_dom = document.getElementById("num1");
const num2_dom = document.getElementById("num2");

const resultado_suma = document.getElementById("resultado_suma");
const resultado_resta = document.getElementById("resultado_resta");
const resultado_multiplicacion = document.getElementById("resultado_mul");
const resultado_division = document.getElementById("resultado_div");
const boton_ocultar = document.getElementById("btn_ocultar");
const resultado = document.getElementById("resultado");

// Solicitar números al usuario

const numero1 = Number(prompt("Ingresa el primer número:"));
num1_dom.textContent = "valor 1: " + numero1;
const numero2 = Number(prompt("Ingresea el segundo número:"));
num2_dom.textContent = "valor 2: " + " " + numero2;

//comienzo a usar funciones para estructurar mejor el codigo...
function suma() {
  return numero1 + numero2;
}

function resta() {
  return numero1 - numero2;
}

function multiplicacion() {
  return numero1 * numero2;
}

function division() {
  if (numero2 === 0) {
    return "Error: División por cero no permitida";
  }
  return (numero1 / numero2).toFixed(2);
}

function mostrar_suma() {
//   resultado_suma.innerHTML = `<h2>Resultado de la suma:</h2>`;
  resultado_suma.textContent = suma();
}

function mostrar_resta() {
  resultado_resta.textContent = resta();
}

function mostrar_multiplicacion() {
  resultado_multiplicacion.textContent = multiplicacion();
}

function mostrar_division() {
  resultado_division.textContent = division();
}

// llamar a las funciones
mostrar_suma();
mostrar_resta();
mostrar_multiplicacion();
mostrar_division();
