import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFNSUtil from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
import {Link} from 'react-router-dom';
axios.defaults.withCredentials = true;

function Calendario() {

    let fechaenviar=[];

    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
    const [datos, setDatos] = useState([]);
    const [datosfiltrados, setDatosFiltrados] = useState([]);

    useEffect(() => {
        let day = fechaSeleccionada.getDate();
        let month = fechaSeleccionada.getMonth() + 1;
        let year = fechaSeleccionada.getFullYear();
        fechaenviar = (year + "-" + month + "-" + day);
        setDatosFiltrados(datos.filter(d => d.fecha.localeCompare(fechaenviar)===0))
      },[datos]);
    
    async function cargarDatos() {
        fetch("http://localhost:5000/auth/get-citas")
        .then(res=>res.json())
        .then(data=>{
                setDatos(data)
        })
        .catch(console.log);
    }
    
    return (
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
                            <button><Link to={"/agendarcita?id="+datac._id} >Agendar</Link></button>
                            </td>
                            </tr>
                    )} 
                    
                </tbody>
            </table>

            
      </div>
    );
  }

export default Calendario;