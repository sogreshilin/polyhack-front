import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    currentVideo: {
        src: "https://storage.yandexcloud.net/polyhack/polytech-philosophy.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7e1ddb4a0d04ef744eae3886b2affd811de5e60e41f992a91880a71bcd8897ae&X-Amz-Date=20190526T083957Z&X-Amz-Credential=I89EjR7hpjWoYGE7xm7A%2F20190526%2Fus-east-1%2Fs3%2Faws4_request",
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
