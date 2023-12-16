import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
/* import { useNavigate } from "react-router-dom"; */
function Form(){
    const [values, setValues] = useState({
        id_usuario:  '',
        tipodedoc_mj: '',
        nombre_mj: '',
        apellido_mj: '', 
        telefono_mj: '',
        correo_mj: '',
        contraseña_mj: '',
        ciudad_mj: '',
        direccion_mj: '',
        ocupacion_mj: ''
    })
    /* const navigate = useNavigate(); */
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/registrar/persona', values)
        .then((res)=>{
         alert('Registrado con exito')   })
        .catch(err => {console.log(err);})}
    return(
       
       <form className="box-body row g-3 col-5 align-items-center" onSubmit={handleSubmit}>
            <div className="form-group col-md-5">
                <label for="input" className="form-label" htmlFor="id_usuario">Número de identificación: </label>
                <input type="number" placeholder="Digite su número de identificación" className="form-control form-control-user" required onChange={e => setValues ({...values, id_usuario: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label for="disabledSelect" className="form-label ">Seleccione su tipo de identificación</label>
                <select id="disabledSelect" className="form-select " onChange={e => setValues ({...values, tipodedoc_mj: e.target.value})}>
                    <option >Cédula ciudadana</option>
                    <option>Cédula extranjería</option>
                    <option>Tarjeta de Identidad</option>
                </select>
            </div>

            <div className="form-group col-md-5">
                <label htmlFor="nombre_mj">Nombres: </label>
                <input type="text" placeholder="Digite su nombre" name="nombre_mj" id="nombre_mj" className="form-control form-control-user" required onChange={e => setValues ({...values, nombre_mj: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label htmlFor="apellido_mj" className="form-label ">Apellidos: </label>
                <input type="text" placeholder="Digite su apellido" name="apellido_mj" id="apellido_mj" className="form-control form-control-user" required onChange={e => setValues ({...values, apellido_mj: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label htmlFor="telefono_mj">Télefono: </label>
                <input type="text" placeholder="Digite su télefono" name="telefono_mj" id="telefono_mj" className="form-control form-control-user" required onChange={e => setValues ({...values, telefono_mj: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label for="emailInput" className="form-label" htmlFor="correo_mj">Email: </label>
                <input type="email" placeholder="Digite su correo:" name="correo_mj" id="correo_mj" className="form-control form-control-user" required onChange={e => setValues ({...values, correo_mj: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label for="inputPassword4" className="form-label" htmlFor="contraseña_mj">Contraseña: </label>
                <input type="password" placeholder="Digite su contraseña:" name="contraseña_mj" id="passw_mujer" className="form-control form-control-user" required onChange={e => setValues ({...values, contraseña_mj: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label for="inputCity" className="form-label" htmlFor="ciudad_mj">Ciudad: </label>
                <input type="text" placeholder="Digite su ciudad:" name="ciudad_mj" id="ciudad_mj" className="form-control form-control-user" required onChange={e => setValues ({...values, ciudad_mj: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label for="inputAdress" className="form-label" htmlFor="dir_mujer">Dirección: </label>
                <input type="text" placeholder="Digite su dirección:" name="dir_mujer" id="dir_mujer" className="form-control form-control-user" required onChange={e => setValues ({...values, direccion_mj: e.target.value})}/>
            </div>

            <div className="form-group col-md-5">
                <label htmlFor="ocupacion_mj">Ocupación: </label>
                <input type="text" placeholder="Digite su ocupación:" name="ocupacion_mj" id="ocupacion_mj" className="form-control form-control-user" required onChange={e => setValues ({...values, ocupacion_mj: e.target.value})}/>
            </div>

            <div className="enterBtnbtn btn-outline-primary m-1 row g-3 col-3 ">
            <button className="btn btn-success" type="submit">
           enviar
          </button>
            </div>      
        </form>
    )
}
export default Form