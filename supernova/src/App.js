import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Extractor from './containers/Extractor/Extractor';
import Description from './containers/Description/Description';

function App() {
    return (
        <div>
            <h1>Supernova</h1>
            <BrowserRouter>
                <Switch>
                    <Route 
                        exact
                        path='/'
                        component={Extractor} />
                    <Route 
                        path='/description'
                        component={Description} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
