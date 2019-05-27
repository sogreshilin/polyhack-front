import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoPlayer from '../../utils/VidePlayer/VideoPlayer';
import styles from './SuggestionItem.css';
import Button from "../../Button/Button";

const SuggestionItem = (props) => {
    console.log(props.words);
    return (
        <div className={styles.SuggestionItem}>
            <div className={styles.VideoPlayer}>
                <VideoPlayer 
                    src={props.src}
                    isAutoplay={props.autoplay}
                    videoId={props.videoId}
                    start={props.start}
                />
            </div>
            <div className={styles.Description}>

                <Button text={"Подробнее"} onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default SuggestionItem;
