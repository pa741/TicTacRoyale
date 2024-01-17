import { useEffect, useState } from "react";
import { db } from "../data/firebase";
import { collection, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import styles from '../styles/game.module.css'
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";


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


  const hasRoom = u.indexOf("?room=") > -1;

  const  onEnter = async () => {
    if(player==null){
    setPlayer(uuid());}
    console.log("ENTER GAME: " + room);
    if(!room) return;
    console.log(db);
    roomDoc = doc(db, "rooms", room);
    var docSnap = await getDoc(roomDoc);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      //if has two players leave
      
      //if room is more than an hour old, delete it
      if(docSnap.data().created < Date().valueOf() - 3600000) {
        setDoc(doc(db, "rooms", room), {
          players: [player],
          turn: player,
          board: ["", "", "", "", "", "", "", "", ""],
          created: Date().valueOf()
        });

      }



      if(docSnap.data().players.length >= 2) {
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

    //on snapshot
  
    const snap = onSnapshot(doc(db, "rooms", room), (doc) => {
      console.log("Current data: ", doc.data());
      setBoard(doc.data().board);
      let isTurn = doc.data().turn === player;
      setTurn(isTurn);
      setPlayers(doc.data().players);
    });



    console.log(player);


  }

  const onClick = (i) => {
    console.log("CLICK: " + i);
    //check if it's your turn

    console.log(board[i] + " " + player)

    //check if square is empty
    if(board[i] !== "" && board[i] !== "hover") {

      console.log("NOT EMPTY");
      return;
    } 
    //check if game is over
    if(gameState !== null){
      console.log("GAME OVER");
       return;
      }

    //update board
    const newBoard = [...board];
    newBoard[i] = player;
    let newPlayer = null;

    console.log("player:" + player);
    console.log("players:" + players);

    players.forEach(p => {
      
      if(p !== player) {
         newPlayer = p;
      }

    });
    setDoc(doc(db, "rooms", room), {
      players: players,
      turn: newPlayer,
      board: newBoard,
      created: Date().valueOf()
    });

  }
  useEffect(() => {

    if (!hasRoom) {
      //console.log("NO ROOM");
      router.push("/");
    } 

    //router.events.on("routeChangeStart", onExit);
    onEnter();

    return () => {
      //router.events.off("routeChangeStart", onExit);
    }

  },[room]);

  var squares = board.map((square, index) => {

    if(square === player) {
    return "X";
    }else if(square === "") {
      return "";
    }else if(square === "hover") {
      return "hover";
    }
    return "O";
    });



  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.table}>

          <Board disabled={!turn} squares={squares} onClick={turn ? onClick : ()=>{}} />
        </div>
      </div>

    </>
  )
}

function Square(props) {
  let style = styles.square;
  if(props.disabled) {
    style+= " " + styles.disabled;
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