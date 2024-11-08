// Problem number 8 answer:

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean{
    return keys.every((key) => key in obj);
}

// Sample Input

const personObj = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personObj, ["name", "age"]));

// and at last output answer : true