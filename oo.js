function Animal(nome, som) {
    this.nome = nome;
    this.som = som;

    this.fazerSom = function() {
        return `${this.nome} faz "${this.som}"`;
    };
};

function Cachorro(nome, raca) {
    Animal.call(this, nome, "Au Au");
    this.raca = raca;

    this.brincar = function() {
        return `${this.nome}, o ${this.raca}, está brincando com uma bola!`;
    };

    this.nadar = function() {
        return `${this.nome}, a ${this.raca} foi dar uma volta no rio, voltou enxarcada`
    };

    this.role = function() {
        return `${this.nome}, o ${this.raca} passou dois dias no mato, voltou agora`
    }
};

function Gato(nome, cor) {
    Animal.call(this, nome, "Miau");
    this.cor = cor;

    this.dormir = function(){
        return `${this.nome}, o gato ${this.cor}, está dormindo no sofá.`;
    };

    this.cacar = function(){
        return `${this.nome} caçou um rato, quatro calangos e dois passarinhos`
    };
};

const Amelia = new Gato('Amelia', 'branco');
const Cesar = new Cachorro('Cesar', 'Vira-lata-lindo');
const Liam = new Cachorro('Liam', 'Vira-lata-lindo');
const Caju = new Cachorro('Caju', 'Vira-lata-linda-de-saia');

console.log(Amelia.cacar());
console.log(Amelia.fazerSom());
console.log(Liam.fazerSom(), Caju.fazerSom(), Cesar.fazerSom());
console.log(Liam.brincar());
console.log(Cesar.role());
console.log(Caju.nadar());