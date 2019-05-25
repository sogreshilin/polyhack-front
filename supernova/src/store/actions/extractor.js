import * as actionTypes from './actionTypes';

import request from '../../utils/request';

const suggestVideoSuccess = () => ({
    type: actionTypes.SUGGEST_VIDEO_SUCCESS,
});

export const findSuggestions = (phrase) => {
    return (dispatch) => {
        setTimeout(() => dispatch(suggestVideoSuccess()), 2000);
    }
};