import React from 'react';
import Cabezal from '../componentes/Cabezal';
import Registro from '../componentes/Registro';
import MenuNavegacion from '../componentes/MenuNavegacion';
import Pie from '../componentes/Pie';
import './Home.css';

function PagCalendario(){
    return(

        <div id="Body">
            <div id="Home-Cabezal">
                <Cabezal/>
            </div>
            <div id="Home-MenuNavegacion">
                <MenuNavegacion/>
            </div>
            <div id="Home-Cuerpo">
                <Registro/>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>

    );
}

export default PagCalendario;