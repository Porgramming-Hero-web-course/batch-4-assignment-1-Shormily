// Problem number 7 answer:

class Car{
    constructor(public make: string, public model: string, public year: number) { }
    
    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

// Sample Input:
const car = new Car('Honda', "Civic", 2018);
console.log(car.getCarAge());

// Sample  Output answer: 6 or  (assuming current year is 2024)