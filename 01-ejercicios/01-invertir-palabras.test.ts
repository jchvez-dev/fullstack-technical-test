import test from 'node:test';
import assert from 'node:assert';
import { reverseWords } from './01-invertir-palabras.js';

test('reverseWords - Validaciones', async (t) => {
  await t.test('debe invertir cada palabra manteniendo el orden original', () => {
    const resultado = reverseWords("Hola soy una cadena");
    assert.strictEqual(resultado, "aloH yos anu anedac");
  });

  await t.test('debe manejar correctamente una sola palabra', () => {
    const resultado = reverseWords("JavaScript");
    assert.strictEqual(resultado, "tpircSavaJ");
  });

  await t.test('debe retornar false si recibe una cadena vacía', () => {
    const resultado = reverseWords("");
    assert.strictEqual(resultado, false);
  });

  test('debe retornar false si recibe una cadena con puros espacios', () => {
    const resultado = reverseWords("    ");
    assert.strictEqual(resultado, false);
  });

  await t.test('debe respetar los espacios simples entre palabras', () => {
    const resultado = reverseWords("Programando ando");
    assert.strictEqual(resultado, "odnamargorP odna");
  });
});