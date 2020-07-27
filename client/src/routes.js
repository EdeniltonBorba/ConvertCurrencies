import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// imports admin
import Dashboard from './pages/admin/dashboard';

// imports client 
import Home from './pages/client/home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* route client */}
                <Route path='/' exact component={Home} />

                {/*route admin */}
                <Route path='/history' exact component={Dashboard} />

            </Switch>
        </BrowserRouter>
    )
}



