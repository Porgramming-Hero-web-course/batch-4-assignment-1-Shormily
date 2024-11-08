// Problem number 3 answer:

function countWordOccurrences(sentence: string, word: string): number{
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    return (sentence.match(regex) || []).length;
}

// Sample Input :

console.log(countWordOccurrences("I love typescript", "typescript"));

// Sample Output answer : 1
