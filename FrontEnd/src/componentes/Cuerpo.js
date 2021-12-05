import React from 'react';
import './Cuerpo.css';
import Calendario from './Calendario.js'

import banner from '../Imagenes/Banner.jfif'
/* "Home" */

function Cuerpo(props){
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


/* "Calendario" */
/*
function Cuerpo(props){
    return(
        <div id="CuerpoTotal">
            

            <Calendario/>
        </div>
    );
}
*/

/* Comentarios
/*
function Cuerpo(props){
    return(
        <div id="CuerpoTotal">
            <div id="Cuerpo-Comentarios">
                <h1> <br/> <br/> <br/> Falta por completar, pero aqui deberian de mostrarse 
                    los comentarios de las personas</h1>
            </div>
            <div id="Cuerpo-Formulario">
                <form>
                    <input type="text" placeholder="Escriba su comentario..."></input>
                    <br/>
                    <button>Enviar</button>
                </form>
            </div>   
        </div>
    );
}
*/
export default Cuerpo;