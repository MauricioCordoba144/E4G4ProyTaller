import React from 'react';
import Cabezal from '../componentes/Cabezal';
import CuerpoHome from '../componentes/CuerpoHome';
import MenuNavegacion from '../componentes/MenuNavegacion';
import Pie from '../componentes/Pie';
import './Home.css';


/* "Home" */
function Home(){
    return(

        <div id="Body">
            <div id="Home-Cabezal">
                <Cabezal/>
            </div>
            <div id="Home-MenuNavegacion">
                <MenuNavegacion/>
            </div>
            <div id="Home-Cuerpo">
                <CuerpoHome/>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>

    );
}


/* "Calendario" */
/*
function Home(){
    return(

        <div id="Body">
            <div id="Home-Cabezal">
                <Cabezal/>
            </div>
            <div id="Home-MenuNavegacion">
                <MenuNavegacion p1="Registro" p2="Login" p3="Inicio" p4="Mi Vehiculo" p5=""/>
            </div>
            <div id="Home-Cuerpo">
                <Cuerpo/>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>

    );
}
*/

/*
function Home(){
    return(

        <div id="Body">
            <div id="Home-Cabezal">
                <Cabezal/>
            </div>
            <div id="Home-MenuNavegacion">
                <MenuNavegacion p1="Registro" p2="Login" p3="Inicio" p4="Calendario" p5="Mi Vehiculo"/>
            </div>
            <div id="Home-Cuerpo">
                <Cuerpo/>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>

    );
}
*/
export default Home;