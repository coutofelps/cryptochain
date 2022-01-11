/*
    Módulo que cria a corrente que vai encadeando blocos a partir da solicitação dos clientes (nesse caso, nosso servidor).
*/

const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock({ data }) {
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length - 1],
            data
        });

        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;