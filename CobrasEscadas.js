'use strict';

class CobrasEscadas {
    constructor() {
        this.initBoard();
        this.initPlayersPositions();
    }

    initPlayersPositions() {
        this.firstPlayerPosition = 0;
        this.secondPlayerPosition = 0;
    }

    initBoard() {
        this.cobrasPos = {
            16: {goToPosition: 6},
            46: {goToPosition: 25},
            49: {goToPosition: 11},
            62: {goToPosition: 19},
            64: {goToPosition: 60},
            74: {goToPosition: 53},
            89: {goToPosition: 68},
            92: {goToPosition: 88},
            95: {goToPosition: 75},
            99: {goToPosition: 80},
        };

        this.escadasPos = {
            2: {goToPosition: 38},
            7: {goToPosition: 14},
            8: {goToPosition: 31},
            15: {goToPosition: 26},
            28: {goToPosition: 84},
            36: {goToPosition: 44},
            51: {goToPosition: 67},
            71: {goToPosition: 91},
            78: {goToPosition: 98},
            87: {goToPosition: 94},
        };
    }

    jogar(dado1, dado2) {
        if(!Number.isInteger(dado1) || !Number.isInteger(dado2))
            throw new Error("os dados devem conter valores numéricos!");

        if(dado1 > 6 || dado1 < 1 || dado2 > 6 || dado2 < 1)
            throw new Error("Os dados devem ter valores entre 1 e 6!");



    }
}