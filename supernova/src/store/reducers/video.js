import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    currentVideo: {
        src: "https://storage.yandexcloud.net/polyhack/polytech_microprocessors%2Fmicroprocessors-1.mp4",
        id: 'uD4izuDMUQA',
        start: 40,
        autoplay: true,
        dscr: 'Supernova',
        wordTimeItems: [{
            word: 'Jdsmksdfjk;sjdfksfava',
            time: 10,
        }, {
            word: 'Script',
            time: 100,
        }, {
            word: 'Gradle',
            time: 18,
        }, {
            word: 'World',
            time: 67,
        }],
    }
}

const setVideoTime = (state, action) => {
    return updateObject(state, {
        start: action.time,
    });
}

export default (state = initialState, action) => {
    switch (action.type) {

        case (actionTypes.SET_VIDEO_TIME):
            return setVideoTime(state, action);
        default: return state;
    }

}
