import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MuniCrear() {
  const [values, setValues] = useState({
    nombre_e: '',
    administrador_e: '',
    direccion_e:''
  });
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/admin/establecimiento")
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/admin/establecimiento/crear", values)
      .then((res) => {
        console.log(res);
        alert("establecimiento creado")
        navigate("/admin/establecimiento");
      })
      .catch((err) => {
        console.log(err);
        alert("No existe el establecimiento")
      });
  };
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <p className="h1 text-muted mb-3">Crea un nuevo establecimiento</p>
          <div className="mb-3">
            <label htmlFor="nombre_e" className="form-label fw-bold fs-5">Nombre</label>
            <input
              type="text"
              placeholder="Digite el nombre"
              name="nombre_e"
              id="nombre_e"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, nombre_e: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="administrador_e" className="form-label fw-bold fs-5">administrador</label>
            <input
              type="text"
              placeholder="Digite el nombre del admin"
              name="administrador_e"
              id="administrador_e"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, administrador_e: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion_e" className="form-label fw-bold fs-5">direccion</label>
            <input
              type="text"
              placeholder="Digite la direccion"
              name="direccion_e"
              id="direccion_e"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, direccion_e: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default MuniCrear;