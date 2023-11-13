let sales = 123_456_789
let course = 'TypeScript'
let is_published = true

let level

function render(document: any){
    console.log(document)
}

// Array
let numbers: number[] = [1, 2, 3]

// Tuple
let user: [number, string] = [1, 'Shrek']

// enum
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium
console.log(mySize)

// Functions                       "?" makes it optional, it's not great though, just give it a default value instead, as shown.
function calculateTax(income: number, taxYear = 2022): number { //This specifies the return type
    //if you don't provide taxYear, by default undefined will be used. that's why || 2022 is there
    // if ((taxYear || 2022) < 2022)
    if (taxYear < 2022) 
        return income * 1.2
    return income * 1.3
}
// before adding default value, you would have to input 2 params.
// calculateTax(10_000, 2022)
calculateTax(10_000)

                                        //if you're not going to return a value 
// function calculateTax(income: number): void {
//     return 0
// }

// Objects
let employee: {
   readonly id: number,
    name: string // ? makes it optional, so you don't have to supply it on the line 47.

    // retire method        return type
    retire: (date: Date) => void
                                    //using method
} = { id: 1, name: 'Shrek', retire: (date: Date) => {
    console.log(date)
}}

// employee.name = 'Shrek' this works in JavaScript if name isn't previously provided, because JS is dynamic.
// employee.id = 0 the readonly prevents you from modifying the value of this property.