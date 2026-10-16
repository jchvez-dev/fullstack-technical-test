/**
 * Determines if there is any combination of elements from the array 
 * (without repeating index positions) that adds up to the target value.
 * 
 * @param {number[]} numbers - The array of numbers available for combination.
 * @param {number} target - The target sum to reach.
 * @returns {boolean} `true` if a valid combination exists, `false` otherwise.
 */
export function sumTarget(numbers: number[], target: number): boolean {
    if (numbers.includes(target)) {
        return true;
    }

    const possibleNumbers = numbers.filter(n => n < target);
    if (!possibleNumbers.length) {
        return false;
    }

    const possibleSums = [0];
    for (const num of possibleNumbers) {
        const currentLength = possibleSums.length;
        
        // verify each previous sum and add the next number
        for (let i = 0; i < currentLength; i++) {
            const newSum = possibleSums[i] + num;

            if (newSum === target) {
                return true;
            }

            // Save the new sum to compare with the next number
            if (newSum < target) {
                possibleSums.push(newSum);
            }
        }
    }

    return false
}

export function run(): void {
    const rangeObjetive: [number[], number][] = [
        [[2, 5, 8, 44, 1, 7], 9],
        [[55, 3, 8, 11, 45, 1], 12],
        [[4, 8, 48, 44, 1], 11],
    ];
    
    rangeObjetive.forEach(([numbers, target]) => {
        const result = sumTarget(numbers, target);

        console.log(`Para los números [${numbers}] con objetivo ${target} -> Resultado: ${result}`);
    });
}