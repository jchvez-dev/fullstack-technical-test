import test from 'node:test';
import assert from 'node:assert';
import { twinPrimes } from './03-primos-gemelos.js';

test('twinPrimes - Validaciones', async (t) => {
    await t.test('debe retornar los pares de primos gemelos dentro del rango [0, 10]', () => {
        const resultado = twinPrimes(0, 10);
        assert.deepStrictEqual(resultado, [
            [3, 5],
            [5, 7]
        ]);
    });

    await t.test('debe retornar los pares de primos gemelos dentro del rango [100, 150]', () => {
        const resultado = twinPrimes(100, 150);
        assert.deepStrictEqual(resultado, [
            [101, 103],
            [107, 109],
            [137, 139]
        ]);
    });

    await t.test('debe retornar 0 si no hay primos gemelos en el rango [700, 800]', () => {
        const resultado = twinPrimes(700, 800);
        assert.strictEqual(resultado, 0);
    });

    await t.test('debe manejar correctamente rangos pequeños sin primos gemelos', () => {
        const resultado = twinPrimes(23, 28);
        assert.strictEqual(resultado, 0);
    });
});
