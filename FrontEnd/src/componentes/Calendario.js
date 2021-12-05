
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFNSUtil from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
axios.defaults.withCredentials = true;
const url = "http://localhost:5000/auth/get-citas";

function Calendario() {

    let fechaenviar=[];
    // let prueba = [
    //     {disponible: "SI",
    //     fecha: "2021/12/3",
    //     horafinal: "8:00",
    //     horainicial: "6:00"},

    //     {
    //     disponible: "SI",
    //     fecha: "2021/12/3",
    //     horafinal: "10:00",
    //     horainicial: "8:00",
    //     }

    // ];
    let prueba = [];

    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
    
    const cargarDatos = async () => {
        
        // axios.get(url).then(response=>{
        //     //setDatosRespuestaPrueba({datosrespuestaprueba: response.data})
        //     //datosrespuestaprueba = response.data;
        //     prueba = Array.from(response.data);
        //     //console.log(datosrespuestaprueba);
        //     console.log(prueba);
        // })

        fetch(url)
        .then(datos=>datos.json())
        .then((datos)=>{
                prueba = datos;
                //prueba = Array.from(datos);
                console.log(prueba);
        })
        .catch(console.log);
    }
    
    const handlePush = () => {
        let day = fechaSeleccionada.getDate();
        let month = fechaSeleccionada.getMonth() + 1;
        let year = fechaSeleccionada.getFullYear();
        fechaenviar = (year + "/" + month + "/" + day);
        console.log(fechaenviar);
        cargarDatos();
    }

    return (
      <div>
          
        <MuiPickersUtilsProvider utils={DateFNSUtil} locale={esLocale}>
            <DatePicker
            value={fechaSeleccionada}
            onChange={cambiarFechaSeleccionada}
            /> <br/>
        </MuiPickersUtilsProvider>

            <button onClick={handlePush}> Buscar Fecha </button>
            
            
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
                    {prueba.map(datac =>

                            <tr>
                              
                            <td id="pruebacolumna" >{datac.fecha}</td>
                            <td id="pruebacolumna" >{datac.horainicial}</td>
                            <td id="pruebacolumna" >{datac.horafinal}</td>
                            <td id="pruebacolumna" >{datac.disponible}</td>
                            <td id="pruebacolumna" >
                    
                            </td>
                            </tr>
                            
                        )} 
                    
                </tbody>
            </table>

            
      </div>
    );
  }



/* intento1 */
/*

<form onSubmit={handleSubmit} noValidate>
             
            <input
          id="id_carac"
          type="text"
          placeholder="Año-mes-dia"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          
          />

</form>



import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css'

class Calendario extends React.Component{
    render(){
        return(
            <div>
                <div id="SeccSuperior">
                    <div id="Espacio"><h1> </h1></div>
                    <div id="CalendarioSeccA">
                        <Calendar/>
                    </div>
                    <div id="Espacio"><h1> </h1></div>
                </div>
                <div id="SeccInferior">
                    <div id="Espacio"><h1> </h1></div>
                    <div id="CalendarioSeccB">
                        <input placeholder="Ingrese titulo de cita.."></input> <br/>
                        <input placeholder="Seleccione la fecha.."></input> <br/>
                        <input placeholder="Hora de atencion.."></input>
                    </div>
                    <div id="Espacio"><h1> </h1></div>
                </div>
                
            </div>
        );
    }
}
*/
export default Calendario;