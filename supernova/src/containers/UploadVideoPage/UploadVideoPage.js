import React, { Component } from 'react';

import Form from '../../components/Form/Form';

import styles from './UploadVideoPage.css';
import * as actions from "../../store/actions";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class UploadVideoPage extends Component {
    onSubmitFormHandler = (event) => {
        event.preventDefault();
        this.props.onVideoUrlSubmitted(this.props.videoUrl);
    };

    onInputChangeHandler = (event) => {
        this.props.onVideoUrlChanged(event.target.value);
    };

    render() {
        return (
            <div className={styles.Upload}>
                <div>
                    <Form
                        error={this.props.isError}
                        title='Upload Your Video file'
                        placeholder='Add link to your video file'
                        value={this.props.videoUrl}
                        onChange={this.onInputChangeHandler}
                        onSubmit={this.onSubmitFormHandler}
                        btnText='Upload'/>
                    {
                        this.props.isError && <div className={styles.Message}>Invalid url specified</div>
                    }
                    {
                        this.props.isOk && <div className={styles.Message}>Processing video started</div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    videoUrl: state.uploader.fileUrl,
    isError: state.uploader.isError,
    isOk: state.uploader.isOk
});

const mapDispatchToProps = (dispatch) => ({
    onVideoUrlChanged: url => dispatch(actions.updateUploadingVideoUrl(url)),
    onVideoUrlSubmitted: url => dispatch(actions.uploadVideoForProcessing(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadVideoPage));



