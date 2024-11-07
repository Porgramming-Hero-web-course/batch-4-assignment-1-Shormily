// Problem number 1 answer:

function sumArray(numbers: number[]): number{
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// and Output answer: 15