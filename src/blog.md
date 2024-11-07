<!--Question No1 : ##The significance of union and intersection types in Typescript -->

 TypeScript - A Union and Intersection Types ar important play a role korea .Atar help a amra different types ar composite type make korta pari ja coder flexibility and type savety barie...

 <!-- Union Types -->
  
Union types use korea amra different typer moddhe akti hote pare amon variable defiend kortea pari..ati tokhone kaje asea jokn akta different types ar man dhron kortea parea..Union type bebhorea (|) symbol  use kora hoi....

<!-- For example -->
function printId(id: number | string){
    console.log("Your ID is:" + id);

}
akhane id parameter number or string hote pare...

<!-- jemon -->
1.When a variable can hold different types.
2.To make the code more flexible and reusable.

<!-- Intersection Types -->
Intersection type use a & symbol use kora hoi .... 
<!-- For example -->
type Person = {name:string};
type Employee = {employeeId:number};
type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name:"John"
    employeeId:1234
}

<!-- This example a bujha jai j EmployeeDetails type Person and Employee both property gain kore  -->


In summary:
Union Type ( | ): Variables can hold one of multiple types.
Intersection Type ( & ): Variables consist of multiple types.



