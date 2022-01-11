/*
    Módulo que simula a criação de um blockchain e de seus blocos. Criamos um loop que instancia um blockchain e nosso construtor de blocos,
    onde passamos nossos dados (a string `blockchain-$i`), colocando esta informação em um bloco e o adicionando ao blockchain.
*/

const Blockchain = require('./blockchain');
const Block = require('./block');

const blockchain = new Blockchain();

for(let i = 0; i < 5; i++) {
    const newData = `blockchain-${i}`;
    blockchain.addBlock({data: newData});
}

console.log(blockchain);