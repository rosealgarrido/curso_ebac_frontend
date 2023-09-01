class Pessoa {
    nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
        }

    dizOla(): string {
        return `Olá ${this.nome}`;
    }
}

class Multiplicacao {
    number1: number;
    number2: number;

    constructor(number1: number, number2: number) {
        this.number1 = number1;
        this.number2 = number2;
    }

    exibeProduto(): number {
        return this.number1 * this.number2
    }
}

const multiplicacao2 = (number1: number, number2: number): number => number1 * number2