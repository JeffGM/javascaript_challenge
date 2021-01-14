const CobrasEscadas = require('./CobrasEscadas');

cobrasEscadasTest = new CobrasEscadas();

//Jogador 1 sobe na escada
console.log(cobrasEscadasTest.jogar(1,1));

//Jogador 2 sobe na escada
console.log(cobrasEscadasTest.jogar(6,1));

//Jogador 1 desce por causa da cobra
console.log(cobrasEscadasTest.jogar(2,6));

