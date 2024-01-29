import { useEffect, useState } from "react";
import { db } from "../data/firebase";
import { collection, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import styles from '../styles/game.module.css'
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import CalculateMove from "../data/AI";
const Game = () => {
  const router = useRouter();
  const room = useSearchParams().get("room");
  var roomDoc;

  const [player, setPlayer] = useState(null); //uuid
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(false);
  const [players, setPlayers] = useState([]); //[player1, player2
  const [gameState, setGameState] = useState(null); //null, "win", "lose", "draw"
  const { asPath } = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const u = `${origin}${asPath}`;



  const getBoardLayout = (board) => {
    return board.map((square, index) => {
      if (square === player) {
        return "X";
      } else if (square === "" || square === undefined) {
        return "";
      } else if (square === "hover") {
        return "hover";
      }
      return "O";
    });
  }
  var squares = board.map((square, index) => {

    if (square === player) {
      return "X";
    } else if (square === "" || square === undefined) {
      return "";
    } else if (square === "hover") {
      return "hover";
    }
    return "O";
  });
  const hasRoom = u.indexOf("?room=") > -1;


  const SendBoard = (board) => {
    console.log("SEND BOARD");
    console.log(board);
    setDoc(doc(db, "rooms", room), {
      players: players,
      turn: player,
      board: board,
      created: Date().valueOf()
    });
  }
  const SendAIBoard = (board) => {



  }



  const SetMove = (i) => {
    console.log("CLICK: " + i);
    if (board[i] !== undefined && board[i] !== "" && board[i] !== "hover") {
      console.log("NOT EMPTY");
      return;
    }

    if (!turn) {
      console.log("NOT YOUR TURN");
      return;
    }

    const newBoard = [...board];
    newBoard[i] = player;
    if (room === "AI") {
      let aiMove = CalculateMove(getBoardLayout(newBoard));
      if (aiMove != -1) {
        newBoard[aiMove] = "O";
        setBoard(newBoard);
      }

    }
    else {
      SendBoard(newBoard);
    }

  }
  const onEnter = async () => {
    if (player == null) {
      setPlayer(uuid());
    }
    console.log("ENTER GAME: " + room);
    if (!room) return;

    if (room == "AI") {
      setPlayers(["AI", player]);
      setTurn(true);
      return;
    } else {
      console.log(db);
      roomDoc = doc(db, "rooms", room);
      var docSnap = await getDoc(roomDoc);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        //if has two players leave

        //if room is more than an hour old, delete it
        if (docSnap.data().created < Date().valueOf() - 3600000) {
          setDoc(doc(db, "rooms", room), {
            players: [player],
            turn: player,
            board: ["", "", "", "", "", "", "", "", ""],
            created: Date().valueOf()
          });

        }



        if (docSnap.data().players.length >= 2) {
          console.log("ROOM FULL");
          //router.push("/");
          return;
        }
        //add player to room
        const newPlayers = [...docSnap.data().players, player];
        console.log("NEW PLAYERS: " + newPlayers);
        roomDoc = setDoc(doc(db, "rooms", room), {
          players: newPlayers,
          turn: docSnap.data().turn,
          board: docSnap.data().board,
          created: docSnap.data().created
        });
      } else {
        console.log("No such document!");
        roomDoc = setDoc(doc(db, "rooms", room), {
          players: [player],
          turn: player,
          board: ["", "", "", "", "", "", "", "", ""],
          created: Date().valueOf()
        });
      }
      const snap = onSnapshot(doc(db, "rooms", room), (doc) => {
        console.log("Current data: ", doc.data());
        setBoard(doc.data().board);
        let isTurn = doc.data().turn === player;
        setTurn(isTurn);
        setPlayers(doc.data().players);
      });

    }

    console.log(player);


  }

  const onClick = (i) => {

    SetMove(i);
  }
  useEffect(() => {

    if (!hasRoom) {
      router.push("/");
    }
    onEnter();

    return () => {
    }

  }, [room]);



  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.table}>

          <Board disabled={!turn} squares={squares} onClick={turn ? onClick : () => { }} />
        </div>
      </div>

    </>
  )
}

function Square(props) {
  let style = styles.square;
  if (props.disabled) {
    style += " " + styles.disabled;
  }
  return (
    <div className={style} onClick={props.onClick}>
      <div className={styles.topwall}>{props.value}</div>
      <div className={styles.leftwall}></div>
      <div className={styles.rightwall}></div>
    </div>
  );
}
function Board(props) {
  const renderSquare = (i) => {
    return <Square disabled={props.disabled} value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };
  return (
    <div>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Game;