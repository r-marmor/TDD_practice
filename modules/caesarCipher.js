export default function caesarCipher(plaintext, shift) {
    // check for edge cases
    while (shift > 26) {
        shift -= 26;
    }
    // handle edge case negative shift
    if (shift < 0) shift = 26 + shift;
    // create an empty string to store the output
    let result = "";
    // Loop through each character in the plaintext
    for (let i = 0; i < plaintext.length; i++) {
        let asciiCode = plaintext.charCodeAt(i);
        
        // Check if character is uppercase
        if (asciiCode >= 65 && asciiCode <= 90) {
            asciiCode = ((asciiCode - 65 + shift) % 26) + 65;
        }
        // Check if character is lowercase
        else if (asciiCode >= 97 && asciiCode <= 122) {
            asciiCode = ((asciiCode - 97 + shift) % 26) + 97;
        } else {
            result += plaintext[i];
            continue;
        }
        // Convert ascii code back to character and add it to the result;
        result += String.fromCharCode(asciiCode);
    }
    return result; 
}