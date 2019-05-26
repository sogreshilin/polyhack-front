import React from 'react';

import styles from './WordTimeItem.css';

const WordTimeItem = (props) => {
    console.log(props, '<---TIME ITEM');
    return (
        <button 
            className={styles.WordTimeItem}
            onClick={props.onClick}>
            <span>{props.word}</span>
            <span className={styles.Time}>{props.time}</span>
        </button>
    )
}

export default WordTimeItem;

