const Blockchain = require("../blockchain/blockchain");

const ledger = new Blockchain();

let game = {
board: ["","","","","","","","",""],
turn: "X",
winner: null
};

function makeMove(position) {

if(game.board[position] !== "" || game.winner){
return {error:"Invalid move"};
}

game.board[position] = game.turn;

ledger.addBlock({
player: game.turn,
position: position
});

game.turn = game.turn === "X" ? "O" : "X";

return game;
}

function getLedger(){
return ledger.chain;
}

module.exports = {makeMove, getLedger};