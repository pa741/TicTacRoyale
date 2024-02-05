
import React from 'react';
import styles from '../../styles/game.module.css'

function Square(props) {
    let style = styles.square;
    let value = props.value;
    if (props.disabled) {
        style += " " + styles.disabled;
    }
    if(props.value === "hover"){
        style += " " + styles.hover;
        value = "";
    }
    return (
        <div className={style} onClick={props.onClick} onMouseEnter={props.onMouseEnter}>
            <div className={styles.topwall}>{value}</div>
            <div className={styles.leftwall}></div>
            <div className={styles.rightwall}></div>
        </div>
    );
}
export default Square;  