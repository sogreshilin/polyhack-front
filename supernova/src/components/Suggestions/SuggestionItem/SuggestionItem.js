import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoPlayer from '../../utils/VidePlayer/VideoPlayer';
import styles from './SuggestionItem.css';

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
                {props.description}
            </div>
        </li>
    )
}

export default SuggestionItem;
