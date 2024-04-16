/*
Вернуть количество гласных в заданной строке. Мы будем считать a, e, i, o, u гласными для этой задачи. 
Входная строка будет состоять только из строчных букв и/или пробелов. 
*/
function countVowels(str) {
    let vowelsCount = 0;
    
    for (let char of str) {
        if (/[aeiou]/.test(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

// тесты с мудла
console.log(countVowels('Hello, world!')); // 3 
console.log(countVowels("this website is for losers LOL!")); // 8
