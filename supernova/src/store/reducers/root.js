import { combineReducers } from 'redux';

import extractor from './extractor';
import uploader from './uploader';
import video from './video';

export default combineReducers({
    extractor,
    video,
    uploader,
});
