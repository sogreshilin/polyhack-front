import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordTime from '../../components/WordTime/WordTime';
import Form from '../../components/Form/Form';
import * as actions from '../../store/actions/index';

import styles from './VideoPage.css';

import VidePlayer from '../../components/utils/VidePlayer/VideoPlayer';

class VideoPage extends Component {
    videoRef = React.createRef();

    componentDidMount() {
        this.videoRef.current.currentTime = this.props.video.start;
        this.videoRef.current.autoplay = this.props.video.autoplay;
    }

    clickWordTimeItemHandler = (time) => {
        this.videoRef.current.currentTime = time;
    }

    render() {
        return (
            <div>
                <div className={styles.FormWrapper}>
                    <Form
                        title='Find videos related to typed phrase'
                        placeholder='Enter phrase'
                        onChange={this.onInputChangeHandler}
                        onSubmit={this.onSubmitFormHandler}
                        btnText='Find'
                    />
                </div>
                <div className={styles.VideoWrapper}>
                    <VidePlayer 
                        src={this.props.video.src}
                        videoRef={this.videoRef}
                        videoId={this.props.video.id}
                        start={this.props.video.start}
                        isAutoplay={this.props.video.autoplay}/>
                </div>
                <WordTime 
                    wordTimeItems={this.props.items}
                    handleWordTimeItem={this.clickWordTimeItemHandler}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.video.currentVideo.wordTimeItems,
    video: state.video.currentVideo,
});

const mapDispatchToProps = (dispatch) => ({
    wordTimeItemHandler: (time) => dispatch(actions.setVideoTime(time)),
});


export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
