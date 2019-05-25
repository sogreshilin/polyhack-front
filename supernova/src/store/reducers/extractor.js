import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    suggestedVideos: [{
            id: 'uD4izuDMUQA',
            start: 40,
            autoplay: false,
            dscr: 'Supernova'
        },{
            id: 'TqGOl31yB4I',
            start: 40,
            autoplay: false,
            dscr: 'Supernova'
        },{
            id: 'L4qM1IEhtNQ',
            start: 40,
            autoplay: false,
            dscr: 'Supernova'
        },{
            id: 'rs9w5bgtJC8',
            start: 40,
            autoplay: false,
            dscr: 'Supernova'
        }
    ],
    isLoading: false,
    isError: false,
}

const suggestVideoSuccess = (state, action) => {
    return updateObject(state, {
        isLoading: false,
    });
}

const suggestVideoFail = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        isError: true,
    });
}

const initSuggestVideos = (state, action) => {
    console.log(action);
    return updateObject(state, {
        phrase: action.phrase,
        isLoading: true,
        isError: false,
    });
}

export default (state = initialState, action) => {
    switch(action.type) {
        case (actionTypes.INIT_SUGGEST_VIDEOS):
            return initSuggestVideos(state, action);
        case (actionTypes.SUGGEST_VIDEO_SUCCESS):
            return suggestVideoSuccess(state, action);
        case (actionTypes.SUGGEST_VIDEO_FAIL):
            return suggestVideoFail(state, action);
        default: return state;
    }
}
