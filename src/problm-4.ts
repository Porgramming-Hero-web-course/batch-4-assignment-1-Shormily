// Problem number 4 answer:
type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };

function calculateShapeArea(shape: Circle | Rectangle): number{
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
    } else if (shape.shape === 'rectangle') {
        return shape.width * shape.height;
    }
    throw new Error("UnKnown shape type");
}

// Sample Input 1
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea)

// Sample Output1 answer: 78.54

// Sample Input 2
const rectangleArea = calculateShapeArea({ shape: 'rectangle', width: 4, height: 6 });
console.log(rectangleArea);

// Sample Output2 answer:24