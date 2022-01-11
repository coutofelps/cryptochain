/*
    O bloco Genesis, também conhecido como bloco 0, é o primeiro bloco no qual são adicionados blocos adicionais em uma blockchain.
    É efetivamente o ancestral ao qual todos os outros blocos podem rastrear sua linhagem, pois cada bloco faz referência ao anterior.
*/

const GENESIS_DATA = {
    timestamp: Date.now(),
    lastHash: '64b7edc786326651e031a4d12d9838d279571946d8c9a5d448c70db94b0e143f',
    hash: 'c671c84681b9d682b9fd43b2a2ef01a343eab7cfa410df9835f8165007d38467',
    data: 'genesis'
};

module.exports = { GENESIS_DATA };