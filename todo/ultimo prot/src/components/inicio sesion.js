import React, { useState } from "react";
import axios from 'axios';

function Session(){
    const [values, setValues] = useState({
        correo_mj:"",
        contraseña_mj:""

    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/inicio_sesion/persona', values)
        .then((res)=>{
         alert('bienvenido')   })
        .catch(err => {console.log(err);})}
    return(
                <div>
                <h1>Inicio de sesión</h1>
          
                <form onSubmit={handleSubmit}>
                  <label htmlfor="correo_mj">Correo electrónico</label>
                  <input type="email" id="email"
                  required onChange={e => setValues ({...values, correo_mj: e.target.value})}
                  />
          
                  <label htmlfor="contraseña_mj">Contraseña</label>
                  <input name="correo_mj" id="correo_mj" type="password" 
                    required onChange={e => setValues ({...values, contraseña_mj_mj: e.target.value})}
                  />        
                  <button type="submit">Iniciar sesión</button>
                </form>
              </div>
            )
}
export default Session