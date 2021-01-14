'use strict';

class CobrasEscadas {
    constructor() {
        this.initBoard();
        this.initPlayersPositions();
    }

    initPlayersPositions() {
        this.players = {
            1: {position: 0},
            2: {position: 0},
        };
    }

    initBoard() {
        this.finalPos = 100;
        this.currentPlayerIndex = 1;

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

    setNextPlayerToPlay() {
        let nextPlayer = this.currentPlayerIndex + 1;

        if(this.players[nextPlayer] === undefined)
            nextPlayer = 0;

        this.currentPlayerIndex = nextPlayer;
    }

    jogar(dado1, dado2) {
        if(!Number.isInteger(dado1) || !Number.isInteger(dado2))
            throw new Error("Os dados devem conter valores numéricos!");

        if(dado1 > 6 || dado1 < 1 || dado2 > 6 || dado2 < 1)
            throw new Error("Os dados devem ter valores entre 1 e 6!");

        let gameWillContinue = this.determineCurrentPlayerPosition(dado1 + dado2);

        if(gameWillContinue) {
            this.showGameStatus(this.currentPlayerIndex);
            this.setNextPlayerToPlay();
        } else {
            this.endGame(this.currentPlayerIndex);
        }
    }

    determineCurrentPlayerPosition(diceSum) {
        let newPosition = this.players[this.currentPlayerIndex].position + diceSum;

        if(this.cobrasPos[newPosition] !== undefined) {
            newPosition = this.cobrasPos[newPosition].goToPosition;

        } else if(this.escadasPos[newPosition] !== undefined) {
            newPosition = this.cobrasPos[newPosition].goToPosition;

        } else if(newPosition > this.finalPos) {
            newPosition = this.players[this.currentPlayerIndex].position + diceSum - this.finalPos;

        } else if(newPosition === this.finalPos){
            return false;
        }

        this.players[this.currentPlayerIndex].position = newPosition;
        return true
    }

    showGameStatus(lastPlayer) {}
    endGame(winner) {}
}