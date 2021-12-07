import React, { useEffect } from 'react';
import Cabezal from '../componentes/Cabezal';
import MenuNavegacion from '../componentes/MenuNavegacion';
import Pie from '../componentes/Pie';
import './Home.css';

import { useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
axios.defaults.withCredentials = true;

function PagAgendarCita(){

    const [info, setInfo] = useState({});
    const [userID, setUserID] = useState("");

    function useQuery(){
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    useEffect(() => {
        setUserID(localStorage.getItem("UserID"));
        let id = query.get("id");
        axios.get(`http://localhost:5000/auth/get-cita/${id}`)
        .then(res => {
            setInfo(res.data[0])
            console.log(res.data)
        })
    },[]);

    return(

        <div id="Body">
            <div id="Home-Cabezal">
                <Cabezal/>
            </div>
            <div id="Home-MenuNavegacion">
                <MenuNavegacion/>
            </div>
            <div id="Home-Cuerpo">
                <h2>Agendar cita <br/>
                Si pulsa el boton, se agendara la cita con la siguiente informacion:...</h2>

                <h4>Fecha de la cita: {info.fecha}</h4>
                <h4>ID del usuario: {userID}</h4>
                <h4>Hora inicial: {info.horainicial}</h4>
                <h4>Hora Final: {info.horafinal}</h4>

                <button> Agendar </button>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>

    );
}

export default PagAgendarCita;