import React from 'react';

import WordTimeItem from './WordTimeItem/WordTimeItem';

import styles from './WordTime.css';

const WordTime = (props) => {
    const wordTimeItems = props.wordTimeItems.map(item => (
        <WordTimeItem 
            word={item.word}
            time={item.time}
            onClick={() => props.handleWordTimeItem(item.time)}
        />
    ));

    return (
        <div className={styles.WordTime}>
            {wordTimeItems}
        </div>
    )
}

export default WordTime;
