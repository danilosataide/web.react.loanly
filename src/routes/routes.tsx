import * as React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Switch from 'react-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Catalog';

function Routes() {
    return (
        <Router>
            {/* <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
            </Switch> */}
        </Router>
    )
}

export default Routes;