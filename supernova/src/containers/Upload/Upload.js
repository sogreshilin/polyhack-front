import React, { Component } from 'react';

import Form from '../../components/Form/Form';

import styles from './Upload.css';

class Upload extends Component {
    state = {
        link: '',
        isValid: false,
    }

    onSubmitFormHandler = (event) => {
        event.preventDefault();
    }

    onInputChangeHandler = (event) => {
        event.preventDefault();
        const value = event.target.value;
    }

    render() {
        return (
            <div className={styles.Upload}>
                <div className={styles.Wrapper}>
                    <Form 
                        title='Upload Your Video file'
                        placeholder='Add link to your video file'
                        onChange={this.onInputChangeHandler} 
                        onSubmit={this.onSubmitFormHandler}
                        btnText='Upload'/>
                </div>
            </div>
        )
    }
}

export default Upload;
