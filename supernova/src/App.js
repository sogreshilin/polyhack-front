import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './containers/MainPage/MainPage';
import VideoPage from './containers/VideoPage/VideoPage';
import UploadVideoPage from './containers/UploadVideoPage/UploadVideoPage';
import SearchResultsPage from "./containers/SearchResultsPage/SearchResultsPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/upload' component={UploadVideoPage}/>
                    <Route path='/suggestions' component={SearchResultsPage}/>
                    <Route path='/video/:id' component={VideoPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
