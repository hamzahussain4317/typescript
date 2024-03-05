let sales = 123_456_789
let course = 'Typescript'
let is_published = true

function render(document: any) {
    console.log(document)
}

let array: number[] = []
array[0] = 1;
array[1] = 2;

// //tuples
// //what if we want to create a array consist of user name and id in this case
// //we use tuples where we create an array of fixed length like:
let user: [number, string] = [1, 'hamza']

//enums//
const enum Size { small = 1, medium, large }
let mySize: Size = Size.medium
console.log(mySize);
//functions
function dosomething(num: number, textYear = 2022): number {
    if (textYear < 20) {
        return 1 * num
    }
    return 0 * num
}

dosomething(2)

//objects
let employee1: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'hamza',
    retire(date: Date) {
        console.log(date)
    }
}




//type allias defining a type of an objects and create multiple objects using it

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'hamza',
    retire(date: Date) {
        console.log(date)
    }
}


//varible is suspicious either it is number or string for this we use the concept
//of narrowing

function KgToLbs(value: number | string): number {
    //narrowing
    if (typeof value === 'number') {
        return value * 2.2;
    }
    else {
        return parseInt(value) + 1
    }
}

//intersection


type draggable = {
    drag: () => void
}
type Resizeable = {
    resize: () => void
}

type UIWidget = draggable & Resizeable;

let textbox: UIWidget = {
    drag: () => { },
    resize: () => { }
}


//literal
//to limit the values of a number we use literal for example if we defined a variable
//with a datatype number it can have any valid number but with literal we can
//limit the vlaue of that variable

type Quantity = 50 | 100;

let quantity: Quantity = 100;

//null types
function greet(name: string | null | undefined) {
    console.log(name)
}

greet('hamza')
greet(null)
greet(undefined)

//optional chaining

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)

//now instead of writing if condition in which we check !== null we can simply do
//and now lets say birthday is optional so now
//optional property access operator
console.log(customer?.birthday?.getFullYear())
//optional element access operator
//customer?.[0]

//similarly optional call
let log: any = null;
log?.('a')
//in all these optional property element and call we donot have to write the
//logic of checking null condition with if else all we have to do
// to put a ? 
