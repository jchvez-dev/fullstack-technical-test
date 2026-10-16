/**
 * Receives a string of text, splits it by spaces, and returns each word
 * reversed individually, while maintaining the original order of the words.
 *
 * @param {string} text - The string of text to be processed.
 * @returns {string | boolean} A new string with each word reversed and separated by spaces,
 * False if receive empty string or only whitespace.
 */
export function reverseWords(text: string): string | boolean {
  if (!text.trim()) {
      return false;
  }

  const words = text.split(" ");
  const reversedWords = words.map(word => word.split('').reverse().join(''))
  return reversedWords.join(" ");
}

export function run(): void {
  const texts: string[] = [
    "Hola soy una cadena",
    "Programando ando",
    "Concatenación",
  ]

  texts.forEach( text => {
    const result = reverseWords(text)

    if (!result) {
      return;
    }

    console.log(`Original: ${text}, invertida: ${result}`)
  });
}
