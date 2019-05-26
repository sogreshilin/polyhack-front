import * as actionTypes from './actionTypes';
import axios from "../../utils/request";

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
        axios.get(`/video/${videoId}/details`)
            .then(response => {
                console.log("response");
                console.log(response.data);
                dispatch({type: actionTypes.SET_VIDEO, video: response.data});
            })
            .catch(e => console.error(e));
    }
}

export const fetchWords = (phrase, videoId) => {
    return dispatch => {
        axios.get(`/search?id=${videoId}&query=${phrase}`)
            .then(response => {
                console.log(` results of /search?id=${videoId}&query=${phrase}`);
                console.log(response.data);
                dispatch({type: actionTypes.SET_WORDS, words: response.data[0].words});
            })
    }
}