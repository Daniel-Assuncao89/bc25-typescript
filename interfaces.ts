/* let pessoa1 = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-11',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'Typescript', 'Node.js', 'Spring Boot'],
    endereco: {
        rua: 'Rua feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '123000-000'
    }
}

let pessoa2 = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-11',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'Typescript', 'Node.js', 'Spring Boot'],
    endereco: {
        rua: 'Rua feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '123000-000'
    },
    rg: '1908390128'
}
*/

interface Endereco {
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string

}

interface Pessoa { //criando uma nova interface na aplicação
    nome: string
    idade: number
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: string[]
    endereco: Endereco
    rg: string //adicionado depois de ter declarado o const p
    cumprimentar(): void //adicionado depois de ter declarado o const p
}

const p: Pessoa = {
    nome: 'Faustao',
    idade: 33,
    altura: 1.9,
    cpf: '222.222.222-22',
    solteiro: false,
    habilidades: ['HTML'],
    endereco: {
        rua: 'Rua bacana',
        numero: 789,
        estado: 'PE',
        cep: '123000-000',
        complemento: 'Apartamento',
    },
    rg: '178989',
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome)
    },
}

const p2: Pessoa = {
    nome: 'Paula',
    altura: 1.7,
    cpf: '222.222.222-22',
    endereco: {
        estado: 'CE',
        rua: 'Rua no ceará',
        complemento: 'Complemento nao sei',
        numero: 607,
        cep: '444000-000'
    },
    rg: '0980938219038',
    solteiro: false,
    cumprimentar() {
        console.log('Olá para todos! prazer em conhecê-los')
    },
    habilidades: ['CSS', 'Angular'],
    idade: 24
}