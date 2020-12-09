// Dificultad para la mineria
const DIFFICULTY = 4;

// Cantidad de monedas en el bloque inicial
const INITIAL_BALANCE = 500000000000000;

// Recompensa por minar
const MINING_REWARD = 50;

// Litening port
const PORT = 5000;

// Nodos mineros
const NODE_ADDRESSES = [`localhost:${PORT}`];

module.exports = { DIFFICULTY, INITIAL_BALANCE, MINING_REWARD, NODE_ADDRESSES };
