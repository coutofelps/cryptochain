/*
    Módulo que cria um blocos. Recebe inicialmente (e obrigatoriamente) o bloco gênesis e depois pode minerar blocos quando solicitado.
*/

const { GENESIS_DATA } = require('./genesis.js');
const cryptoHash = require('./crypto-hash');

class Block {
    constructor({timestamp, lastHash, hash, data}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({lastBlock, data}) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;

        return new this({
            timestamp,
            lastHash,
            data,
            hash: cryptoHash(timestamp, lastHash, data)
        });
    }
}

module.exports = Block;