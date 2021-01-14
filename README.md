# Instruções:
## -> Como executar?

- É possível testar a classe com qualquer compilador javascript com suporte a versão EcmaScript 5.
- Para executar o código na web, pode-se utilizar um compilador online, como: \
      - https://www.jdoodle.com/execute-nodejs-online/ \
      - Observação: neste caso, o trecho "module exports = CobrasEscadas" não é necessário
- Para a execução no computador, recomenda-se o uso do NodeJS

## -> Como testar?

- Para testar a classe, deve-se instanciar um objeto e chamar a função jogar(dado1, dado2).
- Tal função retornará uma mensagem, que pode ser mostrada com a função global console.log. Exemplo:

    testGame = new CobrasEscadas(); \
    console.log(testGame(1,2));

- No repositório, o arquivo testing.js é um exemplo pronto de como testar a classe
- Por fim, exceções foram implmenetadas para permitir testes automatizados, se forem necessários
