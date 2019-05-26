import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoPlayer from '../../utils/VidePlayer/VideoPlayer';
import styles from './SuggestionItem.css';
import Button from "../../Button/Button";

const SuggestionItem = (props) => {    
    return (
        <li className={styles.SuggestionItem}>
            <div className={styles.VideoPlayer}>
                <VideoPlayer 
                    src={props.src}
                    isAutoplay={props.autoplay}
                    videoId={props.videoId}
                    start={props.start}
                />
            </div>
            <div className={styles.Description}>
                <Button text={"Find more"} onClick={props.onClick}/>
            </div>
        </li>
    )
}

export default SuggestionItem;
