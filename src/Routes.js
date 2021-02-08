import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loginPage from './Views/Login/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={loginPage} />
            {/* <Route exact path="/home" component={HomePage} />
            <Route exact path="/cadastro" component={cadastroPage} />
            <Route exact path="/cadastro2" component={cadastro2Page} />
            <Route exact path="/sobrepet" component={sobrePetPage} />
            <Route exact path="/cadastropet" component={cadastroPetPage} />
            <Route exact path="/cadastropet2" component={cadastroPet2Page} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;