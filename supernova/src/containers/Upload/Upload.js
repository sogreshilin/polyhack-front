import React, { Component } from 'react';

import styles from './Upload.css';

class Upload extends Component {
    render() {
        return (
            <div className={styles.Upload}>
                <div className={styles.Wrapper}>
                    <h3>Upload Your Video file</h3>
                    <input placeholder='Add link to your video file'/>
                </div>
            </div>
        )
    }
}

export default Upload;
