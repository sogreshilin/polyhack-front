import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoPlayer from '../../utils/VidePlayer/VideoPlayer';
import styles from './SuggestionItem.css';

const SuggestionItem = (props) => {    
    return (
        <li className={styles.SuggestionItem}>
            <div className={styles.VideoPlayer}>
                <VideoPlayer 
                    isAutoplay={false}
                    videoId='uD4izuDMUQA'
                    start={40}
                />
            </div>
            <div className={styles.Description}>
                weoiwfnjkweifhoyweihfelwkfipoefiweklfjhdxsi8fowefbsjd
            </div>
        </li>
    )
}

export default SuggestionItem;
