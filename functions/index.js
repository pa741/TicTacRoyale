/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {onDocumentWritten} = require("firebase-functions/v2/firestore");



exports.onGameChange = onDocumentWritten(
    {
        document: "rooms/{roomId}",
        region: "europe-west2",
    },
    async (event) => {
        logger.log("Test");
      logger.info("Document written", {structuredData: true});
      const newValue = event.data.after.data();
      const previousValue = event.data.before.data();
      //check board change
        if(newValue.board === previousValue?.board) return;
        //check if board is full
        logger.info("winner: " + newValue.winner);
        if(newValue.winner != null) {
            logger.info("WINNER ALREADY DECLARED");
            return;
        }
        if(newValue.board.filter((x)=>x==="").length === 0) {
            logger.info("BOARD FULL");
            return event.data.after.ref.update({
                winner: "draw"
            });
        }


        //check if board has a winner
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        const board = newValue.board;
        let winner = null;
        winningCombos.forEach((combo) => {
            if(board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
                winner = board[combo[0]];
                if(winner === "hover") winner = null;
            }
        });
        if(winner) {
            logger.info("WINNER: " + winner);

            //update room
           /* const roomDoc = doc(db, "rooms", event.params.roomId);
            roomDoc.update({
                winner: winner
            });*/


            return event.data.after.ref.update({
                winner: winner
            });
        }

      logger.info("New value: " + newValue);
      logger.info("Previous value: " + previousValue);
    });



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
