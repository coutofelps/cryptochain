/*
    Módulo responsável por criar hashes sob demanda para cada bloco.
*/

const crypto = require('crypto');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');
    hash.update(inputs.sort().join(' '));
    return hash.digest('hex');
}

module.exports = cryptoHash;