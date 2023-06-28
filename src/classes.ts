/**
 * A class for representing Aluno.
 */
class Aluno {
    /**
     * Members are protected, so that derived classes can access them.
     * Alternative modifiers are private and public (default).
     */ 
    protected _nome: string = ''
    protected _sobrenome: string = ''
    protected _ra: string = ''

    /**
     * The class full constructor. We can emulate constructor overloading in some 
     * cases by using optional parameters with default values.
     * 
     * @param nome the nome
     * @param sobrenome  the sobrenome
     * @param ra the ra
     */
    constructor(nome: string, sobrenome: string = '', ra: string = '') {
        this.nome = nome
        this.sobrenome = sobrenome
        this.ra = ra
    }

    /**
     * Getters and setters can be defined using the get and set keywords. 
     * By using this tecnique, we can access the object properties as if they
     * were public (i.e. without explicit method calls) while implicitly 
     * a method is called to enforce any restriction over the propety.
     */

    set nome (nome: string) {
        this._nome = nome
    }

    get nome () {
        return this._nome
    }
    
    /**
     * This setter makes sure that every time we assign a value
     * to the ra property, the new value is validated via a regular expression.
     * Notice that this validation will occur even in the constructor of
     * the class.
     * 
     * @param ra the ra
     */
    set ra(ra: string) {
        if (/^\d{0,5}$/.test(ra)) {
            this._ra = ra
        } else {
            throw new Error("RA is invalid")
        }
    }

    get ra () {
        return this._ra
    }

    set sobrenome(sobrenome: string) {
        this._sobrenome = sobrenome
    }

    get sobrenome() {
        return this._sobrenome
    }

    /**
     * The toString() method is called every time 
     * we attempt to convert the object to a string
     * 
     * @returns The string representation
     */
    toString() : string {
        return `nome: ${this.nome}\nsobrenome: ${this.sobrenome}\nra: ${this.ra}\n`
    }
}

/***
 * AlunoGrad inherits from Aluno.
 */
class AlunoGrad extends Aluno {
    private curso: string

    constructor(nome: string, sobrenome: string, 
        ra: string, curso: string) {
            super(nome, sobrenome, ra)
            this.curso = curso
        }

    override toString(): string {
        return super.toString() + `curso: ${this.curso}\n`
    }
}

const aluno1 = new Aluno("Joao", "Silva", "12345")

aluno1.nome = "Pedro"
/**
 * this should trigger an exception, because the setter will reject the value
 */
// aluno1.ra = "123456" 
console.log(aluno1.nome)

/**
 * Different forms to call (implicitly or explicitly) the toString() method.
 */
console.log(aluno1 + '') 
console.log(aluno1.toString())

/**
 * Call the overloaded constructors
 */
const aluno2 = new Aluno('joao', 'silva')
const aluno3 = new Aluno('joao')

console.log(aluno2 + '')
console.log(aluno3 + '')

const alunoGrad1 = new AlunoGrad('joana', 'siqueira', '5678', 'bcc')

console.log(alunoGrad1 + '')

export {
    Aluno
}