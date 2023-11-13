
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