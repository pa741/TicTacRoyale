import { useEffect, useState } from 'react'
import styles from '../styles/game.module.css'
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

export default function Home() {

const [room, setRoom] = useState("")
const router = useRouter();


useEffect(() => {
  setRoom(uuid())
}
, [])
  

  return (
    




    //Make a button that says "Play" and when you click it, it takes you to the game page
    
    <>
    <div className={styles.background}>
      <div className={styles.home}>
        
        <h1 className={styles.title}>Bienvenido a Tic Tac Toe!</h1>
        <div className={styles.homeForm}>
        <h2 className={styles.subtitle}>Unete a una sala para jugar</h2>
        <input className={styles.input} type="text" placeholder="Codigo de sala" value={room} onChange={(e) => setRoom(e.target.value)} />
        <button className={styles.button} onClick={() => router.push(`/game?room=${room}`)}>Jugar</button>
</div>

        
        </div>
      




    </div>
    
    </>
  )
}


