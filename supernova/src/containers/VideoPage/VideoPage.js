import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordTime from '../../components/WordTime/WordTime';
import Form from '../../components/Form/Form';
import * as actions from '../../store/actions/index';

import styles from './VideoPage.css';

import VidePlayer from '../../components/utils/VidePlayer/VideoPlayer';

class VideoPage extends Component {
    state = {
        value: '',
    }

    onInputChangeHandler = (event) => {
        const value = event.target.value;

        this.setState({
            value,
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
    }

    componentWillMount() {
        const videoId = this.props.match.params.id;
        console.log(videoId);

        this.props.fetchVideo();
    }
    videoRef = React.createRef();

    componentDidMount() {
        if (!this.props.video) return; 
        this.videoRef.current.currentTime = this.props.video.start;
        this.videoRef.current.autoplay = this.props.video.autoplay;
    }

    clickWordTimeItemHandler = (time) => {
        console.log(time)
        this.videoRef.current.currentTime = time;
    }

    render() {
        console.log(this.props);

        if (!this.props.video) return (
            <div>Loading...</div>
        ); 

        return (
            <div>
                <div className={styles.FormWrapper}>
                    <Form
                        title='Find videos related to typed phrase'
                        placeholder='Enter phrase'
                        onChange={this.onInputChangeHandler}
                        onSubmit={this.onSubmitHandler}
                        btnText='Find'
                    />
                </div>
                <div className={styles.VideoWrapper}>
                    <VidePlayer 
                        src={this.props.video.url}
                        videoRef={this.videoRef}
                        videoId={this.props.video.id}
                        start={50}
                        isAutoplay={this.props.video.autoplay}/>
                </div>
                <WordTime 
                    wordTimeItems={this.props.video.words}
                    handleWordTimeItem={this.clickWordTimeItemHandler}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    video: state.video.currentVideo,
});

const mapDispatchToProps = (dispatch) => ({
    wordTimeItemHandler: (time) => dispatch(actions.setVideoTime(time)),
    fetchVideo: (videoId) => dispatch(actions.fetchVideo(videoId)),
    fetchWords: (phrase) => dispatch()
});


export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
