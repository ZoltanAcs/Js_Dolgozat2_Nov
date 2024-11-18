//Feladat 1

function removeVowels(str) {
    const vowels = "aeiouAEIOU";
    return str.split('').filter(char => !vowels.includes(char)).join('');
  }


console.log(removeVowels("Hahaha"))


//Feladat 2

function dateCorrect(ds) {
    if (!ds) return ds;
    const [d, m, y] = ds.split(".").filter(x => !Number.isNaN(+x));
    if (!y) return null;
    return new Date(+y, +m - 1, +d).toLocaleDateString("ro-RO")
  }

console.log(dateCorrect("99.99.2016"))
console.log(dateCorrect("70.9.2001"))

//Feladat 3

function dnaToRna(dna) {
    return dna.replace(/T/g, 'U');
  }

console.log(dnaToRna("TTTT"))
console.log(dnaToRna("GCAT"))
console.log(dnaToRna("ATGC"))

//Feladat 4

function fizzBuzz(n) {
    return (n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '') || n;
  }

console.log(fizzBuzz(3));    
console.log(fizzBuzz(5));    
console.log(fizzBuzz(15));   
console.log(fizzBuzz(7));
