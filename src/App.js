import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Component/Home';
import Realhome from './Component/Realhome';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={(props) => <Realhome {...props} />} />
                <Route exact path="/code" render={(props) => <Home {...props} />} />
            </Switch>
        </Router>
    );
}

export default App;