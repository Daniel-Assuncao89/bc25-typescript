"use strict";
// tipagem no TypeScript
// tipagem implícita
let username = 'shaolin_matador_de_porco';
username = 'flavinDoPneu';
// tipagem explicita Number é diferente de number. Number = objeto e number = numero
let pi = 3.1415;
let logado = true;
// union types
let rg = 32134234;
rg = '000991283';
let generico = [];
generico = {
    a: 'ab',
    b: 8,
    c: true
};
generico = 'eu sou generico';
generico = 6.89;
const listaDeNomes = ['Joao pedro', 'cesar', 'vitor'];
listaDeNomes.push('Roberta');
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const valores = ['lsfils', 77, '8f90sad', '7534891', 890];
const arr = [true, false, false, true];
const lista = [true, 32, [], {}];
const lista2 = [[], {}, 312, 'fdskpo'];
