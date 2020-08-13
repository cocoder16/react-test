import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Todo, Grid, Modals, Counter, Async } from '../components/index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Todo}/>
        <Route exact path="/grid" component={Grid}/>
        <Route exact path="/modals" component={Modals}/>
        <Route exact path="/counter" component={Counter}/>
        <Route exact path="/async" component={Async}/>
    </Switch>
);

export default Router;