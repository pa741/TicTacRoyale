import { collection, doc, getDoc, setDoc, onSnapshot, getFirestore, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../data/firebase";


class GameLogic {


  setBoard;
  setTurn;
  setPlayers;
  setWinner;

  room;
  board = ["", "", "", "", "", "", "", "", ""];
  turn = true;
  player = "";
  players = [];
  db = getFirestore(initializeApp(firebaseConfig));




  constructor(player, room, setBoard, setTurn, setPlayers, setWinner) {
    this.player = player;
    this.room = room;

    this.setBoard = setBoard;
    this.setTurn = setTurn;
    this.setPlayers = setPlayers;
    this.setWinner = setWinner;

    //this.OnEnter();
  }


  // Asume no AI
  async OnEnter() {
    console.log("GAME LOGIC");
    //let test = collection(db,"rooms", "test");
    console.log("GAME LOGIC2");

    let roomDoc = doc(this.db, "rooms", this.room);
    var docSnap = await getDoc(roomDoc);
    if (docSnap.exists()) {

      this.OnEnterExistingRoom(docSnap);

    } else {
      this.OnEnterNewRoom();

    }
    const snap = onSnapshot(doc(this.db, "rooms", this.room), (doc) => {
      console.log("Current data: ", doc.data());
      let isTurn = doc.data().turn === this.player;
      this.setBoard(this.getBoardLayout(doc.data().board));
      this.board = doc.data().board;
      this.setTurn(isTurn);
      this.turn = isTurn;
      this.setPlayers(doc.data().players);
      this.players = doc.data().players;
      this.setWinner(doc.data().winner)

    });
  }

  OnEnterExistingRoom = async (docSnap) => {
    console.log("Document data:", docSnap.data());
    //if room is more than an hour old, delete it
    //if has two players leave
    if (docSnap.data().players.length >= 2) {
      console.log("ROOM FULL");
      //router.push("/");
      return;
    }
    if (docSnap.data().created < Date().valueOf() - 3600000) {
      this.CreateNewRoom();
    }
    //add player to room
    const newPlayers = [...docSnap.data().players, this.player];
    console.log("NEW PLAYERS: " + newPlayers);
    setDoc(doc(this.db, "rooms", this.room), {
      players: newPlayers,
      turn: docSnap.data().turn,
      board: docSnap.data().board,
      created: docSnap.data().created
    });
  }
  OnEnterNewRoom = async () => {
    console.log("No such document!");
    this.CreateNewRoom();
  }
  CreateNewRoom = () => {
    return setDoc(doc(this.db, "rooms", this.room), {
      players: [this.player],
      turn: this.player,
      board: ["", "", "", "", "", "", "", "", ""],
      created: Date().valueOf()
    });
  }

  getBoardLayout = (board) => {
    return board.map((square, index) => {
      if (square === this.player) {
        return "X";
      } else if (square === "" || square === undefined) {
        return "";
      } else if (square === "hover") {
        return "hover";
      }
      return "O";
    });
  }


  getOtherPlayer = () => {
    return this.players.filter(p => p !== this.player)[0] ?? "";
  }


  sendBoard(board) {
    console.log("SEND BOARD");
    console.log(board);
    console.log(this.player);
    console.log(this.room);
    console.log(this.players);
    setDoc(doc(this.db, "rooms", this.room), {
      players: this.players,
      turn: this.getOtherPlayer(),
      board: board,
      created: Date().valueOf()
    });
  }
  sendHover(board) {
    console.log("SEND HOVER");
    if (this.players.length < 2) {
      console.log("NO PLAYERS");
      return;
    }


    updateDoc(doc(this.db, "rooms", this.room), {
      board: board
    });
  }




  //Component callbacks
  onClick = (i) => {
    this.SetMove(i);
  }

  SetMove = (i) => {
    console.log("CLICK: " + i);
    if (this.board[i] !== undefined && this.board[i] !== "" && this.board[i] !== "hover") {
      console.log("NOT EMPTY");
      return;
    }

    if (!this.turn) {
      console.log("NOT YOUR TURN");
      return;
    }

    const newBoard = [...this.board];
    newBoard[i] = this.player;
    this.sendBoard(newBoard);
  }



  onMouseEnter = (i) => {
    console.log("MOUSE ENTER");
    if (this.board[i] === "" || this.board[i] === "hover") {
      const newBoard = [...this.board];
      newBoard[i] = "hover";
      //this.setBoard(this.getBoardLayout(newBoard));
      //this.board = newBoard;
      this.sendHover(newBoard);
      //stop hovering after 1 second

      let that = this;
      setTimeout(() => {
        console.log("MOUSE LEAVE");
        if (that.board[i] == "hover") {
          console.log("MOUSE LEAVE2 ");

          const newBoard = [...that.board];
          newBoard[i] = "";
          //that.setBoard(that.getBoardLayout(newBoard));
          //that.board = newBoard;
          that.sendHover(newBoard);
        }
      }, 400);
      //SendBoard(newBoard);
    }
  }
}

module.exports = GameLogic;