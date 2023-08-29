const cachorro = {
    raca: 'Pastor Alemão',
    apelido: 'Rambo',
    idade: 2,
    rugido: function() {
        console.log("au,au");
    }
}

const gato = {
    raca: 'Siames',
    apelido: 'Duda',
    idade: 3,
    rugido: function() {
        console.log("miau");
    }
}

function Animal(raca) {
    this.raca = raca;
    this.rugido = function() {
        console.log("rugido");
    }
}

const cachorro2 = new Cachorro("Basset", "Kira");
const gato2 = new Gato("Korat", 1);


function Cachorro(apelido) {
    this.apelido = apelido
    this.dizApelido = function() {
        console.log(this, apelido);

        Animal.call(this, "Kira");

        
    }
}

function Gato(idade) {
    this.idade = idade
    this.dizIdade = function() {
        console.log(this, idade);

        Animal.call(this, 1);
    }
}

const cavalo = {
    raca: 'mangalarga',
    apelido: 'Apolo',
    idade: 3,
    corDoPelo: 'Marrom',
}

function Cavalo(corDoPelo) {
const cavalo = new Cavalo("marrom");
this.corDoPelo = corDoPelo;
    console.log(this, corDoPelo);

    Animal.call(this, "Marrom");
}

console.log(cachorro.raca);
console.log(gato.apelido);
console.log(cavalo.corDoPelo);
console.log(cachorro2);
console.log(gato2);


