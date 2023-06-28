/**
 * An interface can define two patterns:
 * - a pattern for a typed object (i.e. a typed data structure)
 * - a pattern for an API (which can be used to match an object API or a class API)
 */
interface MembroAcademico {
    nome: string,
    sobrenome: string
}

/**
 * Interfaces can be extended analogously to class extension.
 */
interface Professor extends MembroAcademico {
    siape: string
}

interface Aluno extends MembroAcademico {
    ra: string
}

interface AlunoGrad extends Aluno {
    curso: string
}

interface AlunoPos extends Aluno {
    programa: string,
    orientador: string
}

/**
 * The 'type' keyword define type aliases.
 * A type alias can be used to name union and
 * intersection types (derived types), which are
 * obtained by applying type-set operators (| and &)
 */
/**
 * An object with an intersection type must have all properties
 * present on both types, consequently AlunoTrilha must
 * have all properties of AlunoGrad and AlunoPos.
 */
type AlunoTrilha = AlunoGrad & AlunoPos // intersection type
/**
 * An object with an union type must have all the properties of
 * one the types, or all the properties of both types. Consequently, 
 * AlunoGeral can have all properties of AlunoGrad, or all properties
 * of AlunoPos, or all properties of both types (i.e. it must match
 * at least of the types).
 */
type AlunoGeral = AlunoGrad | AlunoPos // union type

/**
 * AlunoTrilha is an intersection type of both AlunoGrad
 * and AlunoPos, consequently it must have all properties
 * of both types (none can be omitted).
 */
const a1: AlunoTrilha = {
    nome: 'joao', 
    sobrenome: 'silva',
    ra: '1234',
    curso: 'cc',
    programa: 'ppgcc',
    orientador: 'manoel siqueira'
}

console.log(a1)

/**
 * Here we create an object that match the union type considering
 * only the properties of AlunoGrad.
 */
const a2: AlunoGeral = {
    nome: 'maria', 
    sobrenome: 'pereira',
    ra: '5678',
    curso: 'bcc',
} 

/**
 * Here we create an object that match the union type considering
 * only the properties of AlunoPos.
 */
const a3: AlunoGeral = {
    nome: 'maria', 
    sobrenome: 'pereira',
    ra: '5678',
    programa: 'ppgeb',
    orientador: 'francisca matos'
} 

/**
 * An now we create an object that match the union type considering
 * the properties of both types.
 */
const a4: AlunoGeral = {
    nome: 'maria', 
    sobrenome: 'pereira',
    ra: '5678',
    curso: 'bcc',
    programa: 'ppgeb',
    orientador: 'francisca matos'
} 

console.log(a2)
console.log(a3)
console.log(a4)

export = {}