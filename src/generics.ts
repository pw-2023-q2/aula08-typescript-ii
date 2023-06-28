import { Aluno } from "./classes";

/**
 * We can create a generic type by assigning a generic variable
 * to an existing type.
 * For instance, we can use a generic array to define a generic stack, 
 * because the JavaScript array already has LIFO methods
 */
type Stack<T> = T[];

const numberStack: Stack<number> = []

numberStack.push(10)
numberStack.push(20)
numberStack.push(30)

console.log(numberStack)

console.log(numberStack.pop())

console.log(numberStack);

const alunoStack: Stack<Aluno> = []

alunoStack.push(new Aluno('joao'))
alunoStack.push(new Aluno('maria'))
alunoStack.push(new Aluno('silvana'))

console.log(alunoStack)
console.log(alunoStack.pop())
console.log(alunoStack)


/**
 * We can also apply generic type annotations to classes.
 * Here we implement a generic queue using a class.
 */
class GenericQueue<T> {
    private elements: T[]

    constructor() {
        this.elements = [];
    }

    public enqueue(item: T): void {
        this.elements.push(item);
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty, nothing to dequeue.")
        } else {
            return this.elements.shift()
        }
    }

    public isEmpty(): boolean {
        return this.elements.length == 0;
    }

    public toString = (): string => this.elements + ''

}

const stringQueue = new GenericQueue<string>()

stringQueue.enqueue("hello")
stringQueue.enqueue("ufabc")
stringQueue.enqueue("how")
stringQueue.enqueue("are")
stringQueue.enqueue("you")

console.log(stringQueue + "")
console.log(stringQueue.dequeue())
console.log(stringQueue + "")

const alunoQueue = new GenericQueue<Aluno>()

alunoQueue.enqueue(new Aluno('joao'))
alunoQueue.enqueue(new Aluno('maria'))
alunoQueue.enqueue(new Aluno('silvana'))

console.log(alunoQueue + '')
console.log(alunoQueue.dequeue())
console.log(alunoQueue + '')

export {}