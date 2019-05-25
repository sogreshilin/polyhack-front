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
}

const suggestVideoSuccess = (state, action) => {
    return updateObject(state, {
        newProp: 'hey'
    });
}


export default (state = initialState, action) => {
    switch(action.type) {
        case (actionTypes.SUGGEST_VIDEO_SUCCESS):
            return suggestVideoSuccess(state, action);
        default: return state;

    }
}
