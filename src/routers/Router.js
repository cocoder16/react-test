import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TodoContainer, GridContainer, ModalsContainer, CounterContainer, AsyncContainer } from '../containers';

const Router = () => (
    <Switch>
        <Route exact path="/" component={TodoContainer}/>
        <Route exact path="/grid" component={GridContainer}/>
        <Route exact path="/modals" component={ModalsContainer}/>
        <Route exact path="/counter" component={CounterContainer}/>
        <Route exact path="/async" component={AsyncContainer}/>
    </Switch>
);

export default Router;