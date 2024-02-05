
const CalculateMove = require('../data/AI');
const GameLogic = require('./GameLogic');

class GameLogicAi extends GameLogic {
    constructor(player, room, setBoard, setTurn, setPlayers, setWinner) {
        super(player, room, setBoard, setTurn, setPlayers, setWinner);
        setPlayers(["AI", player]);
    }


    OnEnter() {
        console.log("GAME LOGIC AI");
    }
    sendHover(board) { }
    sendBoard(board) {
        this.setBoard(this.getBoardLayout(board));
        this.setTurn(false);
        
        let aiMove = CalculateMove(this.getBoardLayout(board));
        
        console.log("AI MOVE: " + aiMove);
        if (aiMove != -1) {
            board[aiMove] = "O";
            this.setBoard(this.getBoardLayout(board));
            this.board = board;
            this.setTurn(true);
        }
        let winner = this.checkWinner(board);
        if (winner) {
            this.setWinner(winner);
        }

    }

    checkWinner(board) {
       let winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }
    // ... (rest of the methods)
}

module.exports = GameLogicAi;