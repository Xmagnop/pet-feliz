import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from './Views/Login/Login';
import CadastroPage1 from './Views/Cadastro/cadastro1';
import CadastroPage2 from './Views/Cadastro/cadastro2';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/cadastro1" component={CadastroPage1} />
            <Route exact path="/cadastro2" component={CadastroPage2} />
            {/* <Route exact path="/cadastro2" component={cadastro2Page} />
            <Route exact path="/sobrepet" component={sobrePetPage} />
            <Route exact path="/cadastropet" component={cadastroPetPage} />
            <Route exact path="/cadastropet2" component={cadastroPet2Page} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;