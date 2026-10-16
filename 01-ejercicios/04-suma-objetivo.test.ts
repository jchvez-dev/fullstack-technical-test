import test from 'node:test';
import assert from 'node:assert';
import { sumTarget } from './04-suma-objetivo.js';

test('sum - Validaciones de suma por subconjuntos', async (t) => {
    await t.test('debe retornar true si el objetivo está directamente en el arreglo', () => {
        const resultado = sumTarget([2, 5, 9, 44, 1], 9);
        assert.strictEqual(resultado, true);
    });

    await t.test('debe retornar true para combinaciones de 2 o más números (ej. 2+7 o 8+1 = 9)', () => {
        const resultado = sumTarget([2, 5, 8, 44, 1, 7], 9);
        assert.strictEqual(resultado, true);
    });

    await t.test('debe retornar true para combinaciones de múltiples números (ej. 3+8+1 = 12)', () => {
        const resultado = sumTarget([55, 3, 8, 11, 45, 1], 12);
        assert.strictEqual(resultado, true);
    });

    await t.test('debe retornar false si ninguna combinación suma el objetivo', () => {
        const resultado = sumTarget([4, 8, 48, 44, 1], 11);
        assert.strictEqual(resultado, false);
    });

    await t.test('debe retornar false si el arreglo está vacío o no hay números menores al objetivo', () => {
        const resultado = sumTarget([50, 60, 70], 10);
        assert.strictEqual(resultado, false);
    });
});