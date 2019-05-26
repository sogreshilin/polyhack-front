import { combineReducers } from 'redux';

import extractor from './extractor';
import uploader from './uploader';

export default combineReducers({
    extractor, uploader
});
