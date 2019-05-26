import * as actionTypes from './actionTypes';

export const updateUploadingVideoUrl = url => {
    return dispatch => dispatch({ type: actionTypes.FILE_URL_CHANGED, fileUrl: url });
};

export const uploadVideoForProcessing = () => {
    return dispatch => dispatch({ type: actionTypes.VIDEO_UPLOADED_FOR_PROCESSING })
};
