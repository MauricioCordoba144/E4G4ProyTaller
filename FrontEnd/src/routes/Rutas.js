import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../paginas/Home.js'
import Login from '../paginas/Login.js';
import Calendario from '../componentes/Calendario';

function Rutas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/calendario" component={Calendario}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Rutas;