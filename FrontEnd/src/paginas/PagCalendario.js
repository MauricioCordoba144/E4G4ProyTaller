import React from 'react';
import Cabezal from '../componentes/Cabezal';
import Calendario from '../componentes/Calendario';
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
                <Calendario/>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>

    );
}

export default PagCalendario;