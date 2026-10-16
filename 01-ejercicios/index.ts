import { run as runExerciseOne } from './01-invertir-palabras.js';
import { run as runExerciseTwo } from './02-pares-unicos.js';

function main(): void {
  console.log("=========================================================");
  console.log("             EJERCICIO 1: Invertir palabras              ");
  console.log("Implementar una función que reciba una cadena de texto,  ");
  console.log("la divida por espacios y devuelva cada palabra invertida,");
  console.log("respetando el orden de las palabras.");
  console.log("==========================================================");
  runExerciseOne();
  
  console.log("\n=========================================================");
  console.log("             EJERCICIO 2: Pares unicos              ");
  console.log("Implementar una función que reciba un arreglo de numeros ");
  console.log("retorne un nuevo arreglo conteniendo únicamente los ");
  console.log("números pares únicos (sin repetidos)");
  console.log("===========================================================");
  runExerciseTwo();
}

main();
