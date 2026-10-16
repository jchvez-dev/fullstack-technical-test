import { run as runExerciseOne } from './01-invertir-palabras.js';
import { run as runExerciseTwo } from './02-pares-unicos.js';
import { run as runExerciseThree } from './03-primos-gemelos.js';
import { run as runExerciseFour } from './04-suma-objetivo.js';

function main(): void {
  console.log("===============================================================");
  console.log("                EJERCICIO 1: Invertir palabras                 ");
  console.log("Implementar una función que reciba una cadena de texto,        ");
  console.log("la divida por espacios y devuelva cada palabra invertida,      ");
  console.log("respetando el orden de las palabras.                           ");
  console.log("===============================================================");
  runExerciseOne();

  console.log("\n\n")
  console.log("==============================================================");
  console.log("                   EJERCICIO 2: Pares unicos                  ");
  console.log("Implementar una función que reciba un arreglo de numeros      ");
  console.log("retorne un nuevo arreglo conteniendo únicamente los numeros   ");
  console.log("pares únicos (sin repetidos)                                  ");
  console.log("==============================================================");
  runExerciseTwo();

  console.log("\n\n")
  console.log("==============================================================");
  console.log("                 EJERCICIO 3: Primos gemelos                  ");
  console.log("Implementar una función que reciba dos enteros inicio y fin,  ");
  console.log("y devuelva una lista de pares de números primos gemelos       ");
  console.log("dentro del rango                                              ");
  console.log("==============================================================");
  runExerciseThree();

  console.log("\n\n")
  console.log("==============================================================");
  console.log("              EJERCICIO 4: Numero objetivo                    ");
  console.log("Implementar una función que reciba un arreglo de enteros y    ");
  console.log("un número objetivo, y determine si existe alguna combinación  ");
  console.log("de elementos (sin repetir valores) cuya suma sea igual al     ");
  console.log("número objetivo.                                              ");
  console.log("==============================================================");
  runExerciseFour();
}

main();
