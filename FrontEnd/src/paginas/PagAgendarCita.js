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

    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
           Llene el formulario a continuacion..</h2>
       <form noValidate>
           <h4>{userID}</h4>
            <input
                id="id_carac"
                type="text"
                placeholder="Nombres"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br/> <br/>
            <h4>{info.fecha}</h4>
            <input
                id="id_carac"
                type="text"
                placeholder="Apellidos"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br/> <br/>
            <h4>Ingrese correo</h4>
            *<input
                id="id_carac"
                type="text"
                placeholder="Ejemplo@dominio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />*
            <br/> <br/>
            <h4>Ingrese contraseña</h4>
            *<input
                id="id_carac"
                type="text"
                placeholder="Contraseña.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />*
            <br/> <br/> 
            <button
                type="submit">
                Realizar Registro
            </button>
            </form>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>

    );
}

export default PagAgendarCita;