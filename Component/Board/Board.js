
import React from 'react';
import Square from './Square';
import styles from '../../styles/game.module.css'

function Board(props) {
    const renderSquare = (i) => {
        return <Square disabled={props.disabled} value={props.squares[i]} onClick={() => props.onClick(i)} onMouseEnter={() => props.onMouseEnter(i)} />;
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
export default Board;