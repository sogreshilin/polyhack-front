import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    currentVideo: null,
}

const setVideoTime = (state, action) => {
    return updateObject(state, {
        start: action.time,
    });
}

const setVideo = (state, action) => {
    return updateObject(state, {
        currentVideo: action.video,
    });
}

export default (state = initialState, action) => {
    switch (action.type) {

        case (actionTypes.SET_VIDEO_TIME):
            return setVideoTime(state, action);
        case (actionTypes.SET_VIDEO):
            return setVideo(state, action);
        default: return state;
    }

}
