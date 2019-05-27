import * as actionTypes from './actionTypes';
import axios from "../../utils/request";

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

export const updateUploadingVideoUrl = url => {
    return dispatch => dispatch({ type: actionTypes.FILE_URL_CHANGED, fileUrl: url });
};

export const uploadVideoForProcessing = url => {

    return dispatch => {
        if (validURL(url)) {
            axios
                .post("/process", { url })
                .then(() => dispatch({ type: actionTypes.VIDEO_UPLOADED_FOR_PROCESSING }))
                .catch(e => console.error(e));
        } else {
            dispatch({ type: actionTypes.VIDEO_URL_INCORRECT });
        }
    }
};
