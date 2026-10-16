import test from 'node:test';
import assert from 'node:assert';
import { uniquePairs } from './02-pares-unicos.js';

test('uniquePairs - Validaciones', async (t) => {
    await t.test('debe retornar únicamente los números pares únicos sin repetidos', () => {
        const resultado = uniquePairs([1, 2, 3, 4, 4, 5, 6, 2]);
        assert.deepStrictEqual(resultado, [2, 4, 6]);
    });

    await t.test('debe retornar un arreglo vacío si no hay números pares', () => {
        const resultado = uniquePairs([1, 3, 5, 7]);
        assert.deepStrictEqual(resultado, []);
    });

    await t.test('debe eliminar duplicados manteniendo el orden de aparición de los pares', () => {
        const resultado = uniquePairs([8, 2, 8, 4, 2, 10]);
        assert.deepStrictEqual(resultado, [8, 2, 4, 10]);
    });

    await t.test('debe retornar false si el arreglo contiene elementos que no son números', () => {
        // @ts-expect-type-check para probar entrada inválida en JS/TS
        const resultado = uniquePairs([1, 2, "3" as any, 4]);
        assert.strictEqual(resultado, false);
    });

    await t.test('debe retornar false si el arreglo contiene NaN', () => {
        const resultado = uniquePairs([1, 2, NaN, 4]);
        assert.strictEqual(resultado, false);
    });
});
