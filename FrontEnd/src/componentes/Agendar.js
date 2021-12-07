import { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const Agendar = () => {

const [fecha, setFecha] = useState("");
const [id, setId] = useState("");
const [motivoconsulta, setMotivoConsulta] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/auth/registro", {firstname, lastname, email, password})
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}; 

return(
    <div>
       <h2>¿Desea registrarse? <br/>
           Llene el formulario a continuacion..</h2>
       <form onSubmit={handleSubmit} noValidate>
           <h4>Ingrese nombres</h4>
            <input
                id="id_carac"
                type="text"
                placeholder="Nombres"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br/> <br/>
            <h4>Ingrese apellidos</h4>
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
);
};

export default Agendar;