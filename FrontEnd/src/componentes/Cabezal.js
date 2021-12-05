import React from 'react';
import './Cabezal.css';

import logo from '../Imagenes/Logo.png';

function Cabezal(props){
    return(
        <div id="CabezalTotal">
            <div id="Logo">
                <br/>
                <img src={logo} width="70%" height="70%"></img>
            </div>
            <div id="Titulo">
                <h1>Reparamos Todo | Solucionamos cualquier problema</h1>
                <h2>Si nosotros no podemos, nadie mas podra repararlo</h2>
            </div>
        </div>
    );
}

export default Cabezal;