"use strict";
class Cachorro {
    /*
        // atributos ou propriedades
        
       nome: string
       raca: string
       cor: string
       idade: number
       peso: number
       vacinado: boolean
       pedrigree: boolean
       */
    /**
     * método construtor: serve para ao criar um novo objeto da classe, possamos receber valores para que a classe utilize-os. Se o programador não criar um metodo contrutor, a propria linguagem irá gerar um método construtor padrão.
     *
     * Javascript/Typescript só permite 1 metodo construtor.
     */
    constructor(nome, raca, cor, idade, peso, vacinado, pedigree) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.vacinado = vacinado;
        this.pedigree = pedigree;
        /*
        this.nome = nome //this referencia a propria classe que esta inserida
        this.cor = cor
        this.idade = idade
        this.pedrigree = pedigree
        this.peso = peso
        this.raca = raca
        this.vacinado = vacinado
        */
    }
    somar(a, b) {
        return a + b;
    }
}
/**
 * Objeto é uma instancia de uma classe.
 */
let c = new Cachorro('Mc Poze', 'SRD', 'preto', 2, 4, false, false);
//let c2 = new Cachorro('Justin Bieber')
/*
c2.nome = 'Jamal'
c2.raca = 'Pitbull'
c2.cor = 'Branco'
c2.idade = 3
*/
console.log(c);
//console.log(c2.nome)
