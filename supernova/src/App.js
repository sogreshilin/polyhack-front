import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Extractor from './containers/Extractor/Extractor';
import Description from './containers/Description/Description';
import Upload from './containers/Upload/Upload';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route 
                        exact
                        path='/'
                        component={Extractor} />
                    <Route 
                        path='/description'
                        component={Description} />
                    <Route 
                        path='/upload'
                        component={Upload} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
