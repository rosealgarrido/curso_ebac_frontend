const funcionariaAna = {
    nome: 'Ana Machado',
    idade: '35',
    profissao: 'gerente TI',
}

const funcionarioJoao = {
    nome: 'João Oliveira',
    idade: '25',
    profissao: 'suporte',
}

function Funcionario(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}

const funcionariaFernanda = new Funcionario("Fernanda Costa", 30, "Analista de Dados");
const funcionarioPaulo = new Funcionario("Paulo Figueiredo", 45, "Gerente de Projetos");
const funcionariaMaria = new Funcionario("Maria Silva", 28, "Analista de Suporte");

console.log(funcionariaAna);
console.log(funcionarioJoao);
console.log(funcionariaFernanda);
console.log(funcionarioPaulo);
console.log(funcionariaMaria);

