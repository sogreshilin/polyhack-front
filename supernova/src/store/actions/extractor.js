import * as actionTypes from './actionTypes';

const initSuggestVideos = (phrase) => ({
    type: actionTypes.INIT_SUGGEST_VIDEOS,
    phrase
});

const suggestVideoSuccess = () => ({
    type: actionTypes.SUGGEST_VIDEO_SUCCESS,
});

export const findSuggestions = (phrase) => {
    return (dispatch) => {
        dispatch(initSuggestVideos(phrase));
        setTimeout(() => dispatch(suggestVideoSuccess()), 2000);
    }
};

export const updateSearchQuery = query => {
    return dispatch => dispatch({ type: actionTypes.SEARCH_QUERY_UPDATED, query: query });
};
