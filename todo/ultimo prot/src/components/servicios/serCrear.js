import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SerCrear() {
  const [values, setValues] = useState({
    nombre_s: '',
    descripcion_s: '',
    tipo_s: '',
    categoria_s: ''
  });
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/admin/servicios")
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/admin/servicios/crear", values)
      .then((res) => {
        console.log(res);
        alert("Servicio creado")
        navigate("/admin/servicios");
      })
      .catch((err) => {
        console.log(err);
        alert("No existe el servicio")
      });
  };
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <p className="h1 text-muted mb-3">Crea un nuevo servicio</p>
          <div className="mb-3">
            <label htmlFor="nombre_s" className="form-label fw-bold fs-5">Nombre</label>
            <input
              type="text"
              placeholder="Digite el nombre"
              name="nombre_s"
              id="nombre_s"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, nombre_s: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion_s" className="form-label fw-bold fs-5">Descripción</label>
            <input
              type="text"
              placeholder="Digite la descripción"
              name="descripcion_s"
              id="descripcion_s"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, descripcion_s: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tipo_s" className="form-label fw-bold fs-5">Tipo de servicio</label>
            <input
              type="text"
              placeholder="Digite el tipo de servicio"
              name="tipo_s"
              id="tipo_s"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, tipo_s: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
          <label htmlFor="categoria_s" className="form-label fw-bold fs-5">Categoria</label>
                <input
                  type="text"
                  placeholder="Digite la categoria del servicio"
                  name="categoria_s"
                  id="categoria_s"
                  className="form-control"
                  required
                  onChange={(e) =>
                    setValues({ ...values, categoria_s: e.target.value })
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

export default SerCrear;