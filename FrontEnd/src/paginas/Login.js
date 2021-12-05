import { useState } from "react";
import axios from "axios";

import Cabezal from '../componentes/Cabezal';
import MenuNavegacion from '../componentes/MenuNavegacion';
import Pie from '../componentes/Pie';
import './Home.css';

axios.defaults.withCredentials = true;

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:5000/auth/iniciar-sesion", {email, password})
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }; 

    const cerrarSesion = () => {
        axios
        .post("http://localhost:5000/auth/cerrar-sesion")
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    };

    return(
        <div>
            <div id="Body">
            <div id="Home-Cabezal">
                <Cabezal/>
            </div>
            <div id="Home-MenuNavegacion">
                <MenuNavegacion/>
            </div>
            <div id="Home-Cuerpo">
                <div id="CuerpoTotal">
                    <br/>
                    <h2>¿Desea realizar el inicio de sesion?</h2>
                    <h4>Ingrese con el correo y contraseña con la que la cuenta fue creada</h4>
                    <form onSubmit={handleSubmit} noValidate>
                    <input
                        id="id_carac"
                        type="text"
                        placeholder="Ejemplo@dominio.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <input
                        id="id_carac"
                        type="text"
                        placeholder="Contraseña.."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button
                        type="submit">
                        Iniciar Sesion
                    </button>
                    </form>
                    <br />
                    <br />
                    <h2>¿Desea cerrar de sesion?</h2>
                    <button onClick={cerrarSesion}>Cerrar Sesion</button>
                </div>
            </div>
            <div id="Home-Pie">
                <Pie/>
            </div>
        </div>            
        </div>
    );
};

export default Login;