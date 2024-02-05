import styles from '../../styles/game.module.css'

import { ContentCopy } from '@mui/icons-material';
import React from 'react';




function WaitingForPlayers({ playWithAiCallback, roomCode, notificationCallback }) {



    return (
        <div
        >
            <div className={`${styles.waitingForPlayers}`}>
                <h2>Waiting for players</h2>
                <button className={`${styles.playAi}`} onClick={() => { playWithAiCallback() }}>Play with AI</button>
                <button onClick={() => {
                    navigator.clipboard.writeText(roomCode);
                    notificationCallback("Room code copied to clipboard.")
                }}>
                    Copy room code <ContentCopy />
                </button>

            </div>

        </div>

    );
}

export default WaitingForPlayers;