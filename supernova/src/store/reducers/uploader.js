import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    fileUrl: ''
};

const fileUrlChanged = (state, action) => {
    return updateObject(state, { fileUrl: action.fileUrl });
};

const videoUploadedForProcessing = (state) => {
    console.log('videoUploadedForProcessing');
    return updateObject(state, { fileUrl: '' });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FILE_URL_CHANGED):
            return fileUrlChanged(state, action);
        case (actionTypes.VIDEO_UPLOADED_FOR_PROCESSING):
            return videoUploadedForProcessing(state, action);
        default:
            return state;
    }
}
