/**
 * Checks if a given number is a prime number.
 * 
 * Optimization: any factor > sqrt(n) would have a matching factor < sqrt(n)
 * Ej: 16 -> ... 2*8=16, 4*4=16, 8*2=16 ...
 *
 * @param {number} n - The number to evaluate.
 * @returns {boolean} `true` if the number is prime, `false` otherwise.
 */
function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Finds all pairs of twin primes within a given numeric range [start, end].
 * Twin primes are pairs of prime numbers that have a difference of 2 (e.g., (3, 5)).
 *
 * @param {number} start - The lower bound of the range (inclusive).
 * @param {number} end - The upper bound of the range (inclusive).
 * @returns {number[][] | number} A 2D array of twin prime pairs `[first, second]`, 
 * or `0` if no twin primes are found within the specified range.
 */
export function twinPrimes(start: number, end: number): number[][] | number {
    const twins = [];

    for (let i = start; i <= end; i++) {
        const first = i;
        const second = i + 2;
        const isOnRange = second < end;

        if (isOnRange && isPrime(first) && isPrime(second)) {
            twins.push([first, second]);
        }
    }
    return twins.length > 0 ? twins : 0;
}

export function run(): void {
    const limits = [
        [0, 10],
        [100, 150],
        [700, 800],
    ]

    limits.forEach((limits) => {
        const init = limits[0] ?? 0;
        const end = limits[1] ?? 0;

        if (init === end || init > end) {
            return;
        }

        const primes = twinPrimes(init, end);

        console.log(`Los limites ${limits} tiene estos primos gemelos ${primes}`);
    })
}
