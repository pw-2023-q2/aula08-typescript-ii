/**
 * Object type as an interface
 */
interface Student {
    firstName: string,
    lastName: string,
    ra: string,
    course: string
}

/**
 * Typed object
 */
const s1 : Student = {
    firstName: 'joao',
    lastName: 'silva',
    ra: '1234',
    course: 'bcc'
}

console.log(s1)

interface IVehicle {
    plate: string,
    year: number,
    maker: string,
    model: string,
    price: number,
    color: string
    isExempt(): boolean
}

const someCar: IVehicle = {
    plate: 'hyv-6474',
    year: 1980,
    maker: 'chevrolet',
    model: 'opala',
    price: 8000,
    color: 'black',
    isExempt: function () {
        return new Date().getFullYear() - this.year >= 20
    }
}

class Car implements IVehicle {
    plate: string
    year: number
    maker: string
    model: string
    price: number
    color: string
    constructor(plate: string,
        year: number,
        maker: string,
        model: string,
        price: number,
        color: string) {
            this.plate = plate
            this.year = year
            this.maker = maker
            this.model = model
            this.price = price
            this.color = color
        }
    
        isExempt(): boolean {
            return new Date().getFullYear() - this.year >= 20
        }
}

const opala = new Car(
    'hyv-6474',
    1980,
    'chevrolet',
    'opala',
    8000,
    'black'
)

console.log(opala)
console.log(opala.isExempt())

export {}