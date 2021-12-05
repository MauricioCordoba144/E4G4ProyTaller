import React from 'react';
import './MenuNavegacion.css';

import {Link} from 'react-router-dom';

function MenuNavegacion(){

    return(
        <div id="Menu">
            <div id="Menu-3">
                <p id="Subt" className="MenuProp"> Menu de navegación </p>
                <Link to="/"><p className="MenuProp"> Inicio </p></Link>
                <Link to="/login"><p className="MenuProp"> Registro </p></Link>
                <Link to="/login"><p className="MenuProp"> Login </p></Link>
                <Link to="/calendario"><p className="MenuProp"> Calendario </p></Link>
                <Link to="/login"><p className="MenuProp"> Mi Vehiculo </p></Link>
            </div>
        </div>
    );    
}
export default MenuNavegacion;
