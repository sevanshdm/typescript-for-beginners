
// Type Aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void    
}

let employee2: Employee = {
    id: 1,
    name: 'Shrek',
    retire: (date: Date) => {
        console.log(date)
    }
}

// Union Types      "|" creates the union type, means weight can be a number or a string. 
function kgToLbs(weight: number | string): number  {
    // Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2
    else {
        return parseInt(weight) * 2.2 // if not number, it's a string, so you have to turn it into a number with parseInt()
    }
}
kgToLbs(10)
kgToLbs('10kg')

// Intersection types
type Draggable =  {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

// using the intersection type you can combine them into a new type.
type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal Types
// Literl (exact, specific)
type Quanitity = 50 | 100 // quanitity can only be set to 50 or 100, nothing else
let quantity: Quanitity = 100

type Metric = 'cm' | 'inch'

// Nullable Types
function greet (name: string | null) {
    if (name) 
        console.log(name.toUpperCase())
    else
        console.log('Sup!')
}
// TS doesn't like this because you can't call toUpperCase() on a null or undefined object
greet (null)

//Null Checks
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null: { birthday: new Date() }
}
                        // 0 for undefined
let customer = getCustomer(1)
// if (customer !== null && customer !== undefined)

// Optional property access operator "?."
console.log(customer?.birthday) // this only gets executed when there's a customer that's not null, or undefined.

// Optional element acces operator, (this is useful when dealing with arrays)
// customers?.[0]

// Optional call operator
let log: any = null
log?.('a') // this will only get called if log is referencing an actual function, otherwise you get undefined. 