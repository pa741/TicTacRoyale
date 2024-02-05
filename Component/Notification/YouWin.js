import styles from '../../styles/game.module.css'
import React from 'react';




function YouWin() {



    return (
        <div className={`${styles.win}`}>
            <div>
                <h1>You Win</h1>
            </div>
        </div>

    );
}

export default YouWin;