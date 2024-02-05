import { useEffect, useState } from "react";
import styles from '../styles/game.module.css'
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import CalculateMove from "../data/AI";

import GameLogic from "../Clases/GameLogic";
import GameLogicAI from "../Clases/GameLogicAI";

import Board from "../Component/Board/Board";
import Fog from "../Component/Fog/Fog";
import NotificationBanner from "../Component/Notification/NotificationBanner";
import WaitingForPlayers from "../Component/Notification/WatingForPlayers";
import Snackbar from '@mui/material/Snackbar';
import Draw from "../Component/Notification/Draw";
import YouWin from "../Component/Notification/YouWin";
import YouLose from "../Component/Notification/YouLose";



const Game = () => {
  const router = useRouter();
  const room = useSearchParams().get("room");
  const [logic, setLogic] = useState(null);
  const [playAI, setPlayAI] = useState(false);
  const [player, setPlayer] = useState(null); //uuid
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(false);
  const [players, setPlayers] = useState([]); //[player1, player2
  //const [gameState, setGameState] = useState(null); //null, "win", "lose", "draw"
  const [winner, setWinner] = useState(null); // playeruuid or draw
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationOpen, sotificationOpen] = useState(false);

  const { asPath } = useRouter();



  useEffect(() => {
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';
    const hasRoom = `${origin}${asPath}`.indexOf("?room=") > -1;

    if (!hasRoom) {
      router.push("/");
    }
    if (player == null) {
      setPlayer(uuid());
    }
    if (room !== undefined && room !== null && room !== "AI") {
      setLogic(new GameLogic(player, room, setBoard, setTurn, setPlayers, setWinner));

    }//onEnter();


    return () => {
    }

  }, [room]);

  //players
  useEffect(() => {

  }, [players]);
  useEffect(() => {
    if (logic) {
      logic.OnEnter();
    }

  }, [logic]);

  const playWithAiCallback = () => {
    setPlayAI(true);
    setLogic(new GameLogicAI(player, room, setBoard, setTurn, setPlayers, setWinner));
  }

  const notificationCallback = (message) => {
    sotificationOpen(true);
    setNotificationMessage(message);
  }


  return (
    <>
      <div className={styles.background}>
        {turn && <Fog></Fog>}

      </div>
      <div className={styles.container}>
        <NotificationBanner>
          {players.length < 2 && players.length > 0 &&
            <WaitingForPlayers playWithAiCallback={playWithAiCallback} roomCode={room} notificationCallback={notificationCallback} />}
          {winner == "draw" &&
            <Draw />
          }
          {winner == player &&
            <YouWin />
          }
          {winner && winner !== "draw" && winner !== player &&
            <YouLose />
          }
        </NotificationBanner>
        <div className={styles.table}>

          {logic &&
            <Board disabled={(!turn || winner != null)} squares={board} onClick={(turn && winner == null) ? logic.onClick : () => { }} onMouseEnter={logic.onMouseEnter} />
          }

        </div>

      </div>
      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={() => sotificationOpen(false)}
        message={notificationMessage}
      />


    </>
  )
}




export default Game;