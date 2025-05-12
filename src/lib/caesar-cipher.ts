/**
 * Encrypts a message using the Caesar Cipher algorithm
 * @param message - The message to encrypt
 * @param shift - The number of positions to shift each character (1-25)
 * @returns The encrypted message
 */
export function encrypt(message: string, shift: number): string {
  // Ensure shift is between 0 and 25
  shift = ((shift % 26) + 26) % 26;
  
  return message
    .split('')
    .map(char => {
      // Handle lowercase letters
      if (char >= 'a' && char <= 'z') {
        const code = char.charCodeAt(0);
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      // Handle uppercase letters
      else if (char >= 'A' && char <= 'Z') {
        const code = char.charCodeAt(0);
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // Leave non-alphabetic characters unchanged
      return char;
    })
    .join('');
}

/**
 * Decrypts a message that was encrypted using the Caesar Cipher algorithm
 * @param message - The encrypted message
 * @param shift - The number of positions that were shifted during encryption (1-25)
 * @returns The decrypted message
 */
export function decrypt(message: string, shift: number): string {
  // To decrypt, we shift in the opposite direction (26 - shift)
  return encrypt(message, 26 - (shift % 26));
}
