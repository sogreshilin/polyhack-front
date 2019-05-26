import React, { Component } from 'react';

import Form from '../../components/Form/Form';

import styles from './UploadVideoPage.css';
import * as actions from "../../store/actions";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class UploadVideoPage extends Component {
    onSubmitFormHandler = (event) => {
        event.preventDefault();
        this.props.onVideoUrlSubmitted();
    };

    onInputChangeHandler = (event) => {
        this.props.onVideoUrlChanged(event.target.value);
    };

    render() {
        return (
            <div className={styles.Upload}>
                <div className={styles.Wrapper}>
                    <Form 
                        title='Upload Your Video file'
                        placeholder='Add link to your video file'
                        value={this.props.videoUrl}
                        onChange={this.onInputChangeHandler} 
                        onSubmit={this.onSubmitFormHandler}
                        btnText='Upload'/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    videoUrl: state.uploader.fileUrl
});

const mapDispatchToProps = (dispatch) => ({
    onVideoUrlChanged: url => dispatch(actions.updateUploadingVideoUrl(url)),
    onVideoUrlSubmitted: () => dispatch(actions.uploadVideoForProcessing())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadVideoPage));



