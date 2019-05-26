import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    fileUrl: '',
    isError: false,
    isOk: false
};

const fileUrlChanged = (state, action) => {
    return updateObject(state, { fileUrl: action.fileUrl, isError: false, isOk: false });
};

const videoUploadedForProcessing = (state) => {
    console.log('videoUploadedForProcessing');
    return updateObject(state, { fileUrl: '', isError: false, isOk: true });
};

const videoUrlIncorrect = (state, action) => {
    console.log('videoUrlIncorrect');
    return updateObject(state, { isError: true, isOk: false });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FILE_URL_CHANGED):
            return fileUrlChanged(state, action);
        case (actionTypes.VIDEO_UPLOADED_FOR_PROCESSING):
            return videoUploadedForProcessing(state, action);
        case (actionTypes.VIDEO_URL_INCORRECT):
            return videoUrlIncorrect(state, action);
        default:
            return state;
    }
}
