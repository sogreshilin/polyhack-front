import * as actionTypes from './actionTypes';

export const setVideoTime = (time) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_VIDEO_TIME,
            time
        });
    }
}