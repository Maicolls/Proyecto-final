import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuniActua(){
  const { id_establecimiento } = useParams();
  const navigate = useNavigate();
  const [values, setnomMunicipio] = useState({
    nombre_e: '',
    administrador_e: '',
    direccion_e: ''
  });
    
  useEffect(() => {
    axios.get(`http://localhost:4000/admin/establecimiento/leer/${id_establecimiento}`)
      .then((res) => {
        console.log(res);
        setnomMunicipio({
          ...values,
          nombre_e: res.data[0].nombre_e,
          administrador_e: res.data[0].administrador_e,
          direccion_e: res.data[0].direccion_e
      });
    })
      .catch((err) => {
        console.log(err);
        console.log("Ay do, do funciona");
      });
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
      axios.put(`http://localhost:4000/admin/establecimiento/editar/${id_establecimiento}`, values)
        .then((res) => {
            alert("Se ha actualizado");
            console.log(res)
            navigate("/admin/establecimiento");  
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <p className="h1">Actualiza el establecimiento</p>
          <div className="mb-2">
            <label htmlFor="nombre_e">Nombre: </label>
            <input
              type="text"
              placeholder="Digite el nombre"
              name="nombre_e"
              id="nombre_e"
              className="form-control"
              required
              value={values.nombre_e}
              onChange={(e) =>
                setnomMunicipio(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="administrador_e">administrador: </label>
            <input
              type="text"
              placeholder="Digite el nombre del admin"
              name="administrador_e"
              id="administrador_e"
              className="form-control"
              required
              value={values.administrador_e}
              onChange={(e) =>
                setnomMunicipio(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleUpdate}>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default MuniActua;