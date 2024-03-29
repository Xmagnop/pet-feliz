import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from './Views/Login/Login';
import CadastroPage1 from './Views/Cadastro/cadastro1';
import CadastroPage2 from './Views/Cadastro/cadastro2';
import CadastroPagePet1 from './Views/Cadastro/cadastroPet1';
import CadastroPagePet2 from './Views/Cadastro/cadastroPet2';
import HomePage from './Views/Home/Home';
import DetalhesPet from './Views/Detalhes/detalhes';
import ProductsPage from './Views/Products/products';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/cadastro1" component={CadastroPage1} />
            <Route exact path="/cadastro2" component={CadastroPage2} />
            <Route exact path="/cadastropet1" component={CadastroPagePet1} />
            <Route exact path="/cadastropet2" component={CadastroPagePet2} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/detalhes" component={DetalhesPet} />
            <Route exact path="/produtos" component={ProductsPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;