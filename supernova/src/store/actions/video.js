import * as actionTypes from './actionTypes';

export const setVideoTime = (time) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_VIDEO_TIME,
            time
        });
    }
}

export const fetchVideo = (videoId) => {
    return dispatch => {
        const video = {
            videoId: '11111',
            url: 'https://storage.yandexcloud.net/polyhack/polytech_microprocessors%2Fmicroprocessors-1.mp4',
            words: [
                {word: 'word1', timecode: 11},
                {word: 'word2', timecode: 11},
                {word: 'word3', timecode: 11},
                {word: 'word4', timecode: 112},
            ],
        }

        dispatch({
            type: actionTypes.SET_VIDEO,
            video,
        });
    }
}

export const fetchWords = (phrase) => {
    return dispatch => {
        const words = [
            {word: 'jdqhwowq', timecode: 452},
            {word: 'dnqowdwqio', timecode: 11},
            {word: 'qwdjqwdqw', timecode: 11},
            {word: 'dqwjdqwod', timecode: 112},
        ];

        dispatch({
            
        })

    }
}