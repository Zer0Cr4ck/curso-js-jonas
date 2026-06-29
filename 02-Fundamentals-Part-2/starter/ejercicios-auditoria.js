"use strict";

//Ejercicio 1

const filtrarProyectosB2B = function (arr) {
  let proyectosGrandes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) continue;
    proyectosGrandes.push(arr[i]);
  }
  return proyectosGrandes;
};

console.log(filtrarProyectosB2B([12, 45, 8, 22]));
//Ejercicio 2
const pedidoMueble = {
  tipoMueble: "Repostero Alto",
  metrosLineales: 4,
  precioMelaminaPorMetro: 250,
  calcularPrecioTotal: function () {
    return (this.precioFinal =
      this.metrosLineales * this.precioMelaminaPorMetro);
  },
};

pedidoMueble.calcularPrecioTotal();

console.log(pedidoMueble);

//Ejercicio 3

const planchasPorObra = [15, 30, 25];

let acc = 0;

for (let i = 0; i < planchasPorObra.length; i++) {
  acc += planchasPorObra[i];
}

console.log(
  `Torres Postformados uso ${acc} planchas de melamina en total por sus ${planchasPorObra.length} proyectos`,
);

//Ejercicio 4

const calcularInstalacion = (cantidadMuebles, tipoCliente) =>
  tipoCliente == "B2B" ? 150 * cantidadMuebles : 220 * cantidadMuebles;

console.log(calcularInstalacion(8, "B2B"));

// ============================================================================
// EJERCICIO 2: EL CONTROL DE CALIDAD DE PLANCHAS (Métodos de Arrays)
// ============================================================================
// Tienes el siguiente inventario con las longitudes de 5 retazos de melamina
// que quedaron en el taller (en centímetros):
// const retazos = [45, 120, 85, 30, 150];
//
// TU TAREA: Para optimizar la producción, necesitas crear un nuevo array que
// contenga únicamente los retazos que midan 80 centímetros o más.
// Utiliza un bucle 'for' tradicional para recorrer el array 'retazos' y, apoyándote
// en la propiedad '.length' y el método '.push()', llena un nuevo array llamado
// 'retazosUtiles'. Al finalizar, imprime el resultado en la consola.

const retazos = [45, 120, 85, 30, 150];

let retazosUtiles = [];

for (let i = 0; i < retazos.length; i++) {
  if (retazos[i] >= 80) retazosUtiles.push(retazos[i]);
}

console.log(retazosUtiles);

// ============================================================================
// EJERCICIO 3: EL SELECTOR DE PROVEEDORES (Objetos, Métodos y 'this')
// ============================================================================
// Necesitamos evaluar los costos de tus dos proveedores principales de placas.
// TU TAREA: Crea un único objeto llamado 'gestionProveedores'. Este objeto debe
// tener las siguientes propiedades con los precios por plancha de 18mm:
// - precioPelikano: 210
// - precioNovopan: 195
//
// EL MÉTODO: Agrega un método dentro de este objeto llamado 'compararPresupuesto'.
// Este método debe recibir un parámetro: 'planchasNecesitadas' (un número).
// Usando la palabra clave 'this', debe calcular cuánto te costaría el lote con
// Pelikano y cuánto con Novopan.
// Al final, debe retornar un mensaje (string) descriptivo que diga exactamente:
// "Pelíkano costará S/. X y Novopan S/. Y" (reemplazando X e Y con los totales).
// Ejecuta el método para un pedido de 10 planchas e imprímelo en la consola.

const gestionProveedores = {
  precioPelikano: 210,
  precioNovopan: 195,
  compararPresupuesto: function (planchasNecesitadas) {
    return (this.compararCostoTotal = `Pelikano costara S/. ${this.precioPelikano * planchasNecesitadas} y Novopan S/. ${this.precioNovopan * planchasNecesitadas}`);
  },
};

gestionProveedores.compararPresupuesto(10);

console.log(gestionProveedores.compararCostoTotal);

//Sumar rango de numeros

const sumarRango = function (inicial, final) {
  let suma = 0;
  for (let i = inicial; i <= final; i++) {
    suma += i;
  }

  return suma;
};

console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));

console.warn("/////////////////////////");
//Imprimir un arreglo

const imprimirArreglo = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
imprimirArreglo([1, "Hola", 2, "Mundo"]);

console.warn("/////////////////////////");

const bmi = function (peso, altura) {
  let bmiCalculado = peso / altura ** 2;
  if (bmiCalculado < 18.5) return "Bajo de Peso";
  if (bmiCalculado <= 24.9) return "Normal";
  if (bmiCalculado <= 29.9) return "Sobrepeso";
  return "Obeso";
};

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7));

console.warn("/////////////////////////");

//contar rango de numeros

const contarRango = (inicial, max) => max - 1 - inicial;

console.log(contarRango(1, 9));
console.log(contarRango(1332, 8743));
console.log(contarRango(5, 6));
console.warn("/////////////////////////");

//contar numero de veces que aparece la letra A

const numeroDeAes = function (palabra) {
  let acc = 0;
  const palabraNormalizada = palabra.toLowerCase();

  for (let i = 0; i < palabraNormalizada.length; i++) {
    if (palabraNormalizada[i] === "a") acc++;
  }
  return acc;
};

let string = "hola";
console.log(numeroDeAes("holaaaaaaa munda"));
console.warn("/////////////////////////");

//multiplicar arreglo

const multiplicarArreglo = function (arr) {
  let resultado = 1;
  for (let i = 0; i < arr.length; i++) {
    resultado *= arr[i];
  }
  return resultado;
};

console.log(multiplicarArreglo([4, 1, 2, 3]));
console.warn("/////////////////////////");

//Remover ceros de un arreglo

const removerCeros = function (arr) {
  let ceros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) ceros.push(arr[i]);
  }
  return ceros;
};

console.log(removerCeros([0, 1, 0, 2, 0, 3])); //[1,2,3]
console.log(removerCeros([9, 3, 6, 4]));
console.log(removerCeros([0, 0, 0]));

console.warn("/////////////////////////");

//arn

const transcribir = function (str) {
  let arn = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") arn += "C";
    else if (str[i] === "C") arn += "G";
    else if (str[i] === "T") arn += "A";
    else if (str[i] === "A") arn += "U";
  }
  return arn;
};

console.log(transcribir("ACGT"));
console.log(transcribir("ACGTGGTCTTAA"));

console.warn("/////////////////////////");

//capitalizar la primera letra de cada palabra en un string

const capitalizar = function (str) {
  //1-En caso no se pueda correr,se termina todo
  if (str === "") return "";

  //2-creamos variables que almacenara con las letras en mayus

  let resultado = "";

  //3-Agregamos la primera letra del str a resultado en mayus

  resultado = str[0].toUpperCase();

  //4-Ahora recorremos toda la frase o palabras

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      resultado += str[i].toUpperCase();
    } else {
      resultado += str[i];
    }
  }

  return resultado;
};

console.log(capitalizar("hola mundo")); // Imprime: "Hola Mundo"
console.log(capitalizar("make it real")); // Imprime: "Make It Real"
console.log(capitalizar("")); //""

console.warn("/////////////////////////");

//Encontrar numero maximo y numero minimo

const max = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const min = function (arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(max([3, 9, 6]));
console.log(max([67, 35, 54, 26]));
console.log(max([5, 9, 2, 4, 5, 7]));
console.warn("MINIMO");
console.log(min([3, 9, 6]));
console.log(min([67, 35, 54, 26]));
console.log(min([1, 9, 2, 4, 5, 7]));
console.warn("CONTAR ****");

//Contar ***

const numAsteriscos = function (arr) {
  let contador = 0;

  for (let i = 0; i < arr.length; i++) {
    let filaInicial = arr[i];
    for (let j = 0; j < filaInicial.length; j++) {
      if (filaInicial[j] === "*") {
        contador++;
      }
    }
  }
  return contador;
};

console.log(
  numAsteriscos([
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ]),
);
