// Problem number 2 answer:

function removeDuplicates(numbers: number[]): number[]{
    return Array.from(new Set(numbers));
}

// Sample Input :
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// And Output answer : [1,2,3,4,5]
