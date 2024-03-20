class Pessoa {

//atributos
    nome: string;
    idade: number;

//metodos
    exibirDadosPessoa(): string{
        return "Nome:" + this.nome + " Idade:" + this.idade;
    }

//construtor
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa = new Pessoa("Pedro", 18);
console.log(pessoa.exibirDadosPessoa());

class Empregado extends Pessoa {

//atributos
    salario: number;

//construtor
    constructor(nome: string, idade: number, salario: number){
        super(nome, idade);
        this.salario = salario;
    }

//metodos
    mostrarDados(): string{
        return this.exibirDadosPessoa() + " Salario: " + this.salario;
    }
}

const empregado = new Empregado("Lucas", 20, 1200);
console.log(empregado.mostrarDados());