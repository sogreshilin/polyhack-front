import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './containers/Extractor/Extractor';
import VideoPage from './containers/Description/Description';
import UploadVideoPage from './containers/Upload/Upload';
import SearchResultsPage from "./containers/Suggestions/Suggestions";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/upload' component={UploadVideoPage}/>
                    <Route path='/suggestions' component={SearchResultsPage}/>
                    <Route path='/video' component={VideoPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
