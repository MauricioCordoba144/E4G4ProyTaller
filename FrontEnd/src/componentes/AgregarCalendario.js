import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFNSUtil from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
axios.defaults.withCredentials = true;

function AgregarCalendario() {

    let fechaenviar=[];

    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
    const [datos, setDatos] = useState([]);
    const [datosfiltrados, setDatosFiltrados] = useState([]);

    const [fecha, setFecha] = useState("");
    const [horainicial, setHoraInicial] = useState("");
    const [horafinal, setHoraFinal] = useState("");
    const [disponible, setDisponible] = useState("");

    useEffect(() => {
        let day = fechaSeleccionada.getDate();
        let month = fechaSeleccionada.getMonth() + 1;
        let year = fechaSeleccionada.getFullYear();
        fechaenviar = (year + "-" + month + "-" + day);
        setDatosFiltrados(datos.filter(d => d.fecha.localeCompare(fechaenviar)===0))
      },[datos]);
    
    async function cargarDatos() {
        axios.get("http://localhost:5000/auth/get-citas")
        .then(res => {
            setDatos(res.data);
        })
    }
    
    async function eliminarDatos(id) {
        console.log(id);
        axios.delete(`http://localhost:5000/api/eliminar-citas/${id}`)
        .then(res => {
            console.log(res);
        })
        cargarDatos();
    }

    async function agregarDatos (e) {
        e.preventDefault();
        await axios
        .post("http://localhost:5000/api/post-citas", {fecha,horainicial,horafinal,disponible})
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        cargarDatos();
        vaciar();
    }

    // const agregarDatos = (e) => {
        // e.preventDefault();
        // axios
        // .post("http://localhost:5000/api/post-citas", {fecha,horainicial,horafinal,disponible})
        // .then((response) => {
        //     console.log(response);
        // }).catch((error) => {
        //     console.log(error);
        // })
        // cargarDatos();
        // vaciar();
    // }; 

    function vaciar() {
        setFecha("");
        setHoraInicial("");
        setHoraFinal("");
        setDisponible("");  
    };

    return (
        <div>
        <div>
            <form onSubmit={(e)=>agregarDatos(e)} noValidate>
            <input
                id="id_carac"
                type="text"
                placeholder="Fecha YYYY-MM-DD..."
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
            />
            <br/>
            <input
                id="id_carac"
                type="text"
                placeholder="Hora inicial...00:00"
                value={horainicial}
                onChange={(e) => setHoraInicial(e.target.value)}
            />
            <br/>
            <input
                id="id_carac"
                type="text"
                placeholder="Hora final...00:00"
                value={horafinal}
                onChange={(e) => setHoraFinal(e.target.value)}
            />
            <br/>
            <input
                id="id_carac"
                type="text"
                placeholder="¿Disponible? -Si -No"
                value={disponible}
                onChange={(e) => setDisponible(e.target.value)}
            />
            <br/>
            <button
                type="submit">
                Agregar Datos
            </button>
            </form>
        </div>

        <br/>

        <div>
            <MuiPickersUtilsProvider utils={DateFNSUtil} locale={esLocale}>
                <DatePicker
                value={fechaSeleccionada}
                onChange={cambiarFechaSeleccionada}
                /> <br/>
            </MuiPickersUtilsProvider>

            <button onClick={() => cargarDatos()}> Buscar Fecha </button>
                       
            <table className="table">
                <thead>
                    <tr>
                        <th id="pruebacolumna" scope="col"> Fecha </th>
                        <th id="pruebacolumna" scope="col"> Hora inicio </th>
                        <th id="pruebacolumna" scope="col"> Hora final </th>
                        <th id="pruebacolumna" scope="col"> ¿Disponible? </th>
                        <th id="pruebacolumna" scope="col"> Acciones </th>
                    </tr>

                </thead>
                <tbody>
                    {datosfiltrados.map(datac =>
                            
                            <tr key={datac._id}> 
                            <td id="pruebacolumna" >{datac.fecha}</td>
                            <td id="pruebacolumna" >{datac.horainicial}</td>
                            <td id="pruebacolumna" >{datac.horafinal}</td>
                            <td id="pruebacolumna" >{datac.disponible}</td>
                            <td id="pruebacolumna" >
                            <button onClick={() => eliminarDatos(datac._id)}>Eliminar</button>
                            </td>
                            </tr>
                    )} 
                    
                </tbody>
            </table>

        </div>
        </div>
    );
  }
    export default AgregarCalendario;