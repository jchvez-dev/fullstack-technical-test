/**
 * Receives an array of numbers, validates that all elements are valid numbers,
 * filters out the even numbers, and returns a new array containing only 
 * unique even numbers (without duplicates).
 *
 * @param {number[]} numbers - The array of numbers to be processed.
 * @returns {number[] | boolean} A new array with unique even numbers,
 * False if receive empty string or only whitespace.
 */
export function uniquePairs(numbers: number[]): number[] | false {
    if (!numbers.every((item) => typeof item === 'number' && !isNaN(item))) {
        return false;
    }
    const pairs: number[] = numbers.filter(num => num % 2 === 0);

    return [... new Set(pairs)];
}

export function run(): void {
    const arrayNumbers = [
        [2, 7, 9, 12, 33, 15, 22, 12, 4],
        [1, 2, 3, 4, 5, 6, 7, 2, 4, 6, 8, 6],
    ]

    arrayNumbers.forEach((numbers) => {
        const pairs = uniquePairs(numbers);

        if (!pairs) {
            return;
        }

        console.log(`[${numbers}] tiene estos pares unicos [${pairs}]`);
    })
}