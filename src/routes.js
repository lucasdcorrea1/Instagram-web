import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';
import login from './pages/Login';

function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={login} />
            <Route path="/feed" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;