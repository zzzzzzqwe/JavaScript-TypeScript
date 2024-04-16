function isPangram(sentence) {
    let letters = {};
    
     // Проходим по каждому символу в строке
     for (let char of sentence) {
        if (/[a-z]/.test(char)) {
            if (char !== ' ') {
                letters[char] = true;
            }
        }
    }
    return Object.keys(letters).length === 26;
    
}
// тесты с мудла

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true
console.log(isPangram('This is not a pangram.')) // false