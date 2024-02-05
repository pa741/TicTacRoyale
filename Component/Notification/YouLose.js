import styles from '../../styles/game.module.css'
import React from 'react';




function YouLose() {



    return (
        <div>
            <div className={`${styles.lose}`}>
                <h1>You Lose</h1>
            </div>
        </div>

    );
}

export default YouLose;