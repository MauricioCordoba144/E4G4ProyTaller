import React from 'react';
import './../Cuerpo.css';

import banner from '../../Imagenes/Banner.jfif'

function CuerpoHome(){
    return(
        <div id="CuerpoTotal">
            <div id="Cuerpo-banner">
                <img src={banner} width="100%" height="100%"></img>
            </div>
            <div id="Cuerpo-texto">
                <h1>Somos la empresa Repara-todo</h1>
                <p>
                    Ofrecemos esta pagina web para que los clientes tengan una mejor calidad del servicio,
                    lo anterior al contar con diferentes modalidades de atencion, desde una revision
                    general, un cambio de aceite, reparacion del vehiculo, etc. Esto permitira poseer un
                    mejor control en los tiempos para evitar incomodidades al tener que pasar mucho tiempo
                    en el taller al encontrarse este lleno, por parte de los clientes. 
                </p>
                <p>                   
                    En caso de que el vehiculo requiera de reparacion y deba de quedarse en el taller, el
                    usuario podra realizar sus consultas al loguearse a la cuenta. Dichas consultas son 
                    totalmente gratuitas asi como el uso de la pagina web.
                </p>
            </div>
        </div>
    );
}

export default CuerpoHome;