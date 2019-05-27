import * as actionTypes from './actionTypes';
import axios from "../../utils/request";
import queryString from "query-string";

const initSuggestVideos = (phrase) => ({
    type: actionTypes.INIT_SUGGEST_VIDEOS,
    phrase
});

const suggestVideoSuccess = (videos) => ({
    type: actionTypes.SUGGEST_VIDEO_SUCCESS,
    videos
});

export const findSuggestions = (phrase) => {
    return (dispatch) => {
        dispatch(initSuggestVideos(phrase));
        axios.get("/search?" + queryString.stringify({query: phrase}))
            .then(response => dispatch(suggestVideoSuccess(response.data)))
            .catch(e => console.error(e));
    }
};

export const updateSearchQuery = query => {
    return dispatch => dispatch({ type: actionTypes.SEARCH_QUERY_UPDATED, query: query });
};
