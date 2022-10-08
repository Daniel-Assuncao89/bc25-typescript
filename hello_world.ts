// tipagem no TypeScript

// tipagem implícita
let username = 'shaolin_matador_de_porco'
username = 'flavinDoPneu'

// tipagem explicita Number é diferente de number. Number = objeto e number = numero
let pi: number = 3.1415
let logado: boolean = true

// union types
let rg: number | string = 32134234
rg = '000991283'

let generico: any = []
generico = {
    a: 'ab',
    b: 8,
    c: true
}
generico = 'eu sou generico'
generico = 6.89

const listaDeNomes: string[] = ['Joao pedro', 'cesar', 'vitor']
listaDeNomes.push('Roberta')

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const valores: Array<string | number> = ['lsfils', 77, '8f90sad', '7534891', 890]
const arr: Array<boolean> = [true, false, false, true]
const lista: Array<any> = [true, 32, [], {}]
const lista2: any[] = [[], {}, 312, 'fdskpo']