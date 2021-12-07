import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../paginas/Home.js'
import Login from '../paginas/Login.js';
import Calendario from '../paginas/PagCalendario';
import Registro from '../paginas/PagRegistro';
import AgregarCalendario from '../paginas/PagAgregarCalendario';
import PagAgendarCita from '../paginas/PagAgendarCita.js';

function Rutas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/calendario" component={Calendario}/>
                <Route exact path="/registro" component={Registro}/>
                <Route exact path="/agregarcalendario" component={AgregarCalendario}/>
                <Route exact path="/agendarcita" component={PagAgendarCita}/>
            
            </Switch>
        </BrowserRouter>
    );
}

export default Rutas;