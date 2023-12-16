import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManzaCrear() {
  const [values, setValues] = useState({
    nombre_m:'',
    localidad_m:'',
    direccion_m:'',
    fk_municipios:''
  });
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/admin/manzanas")
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/admin/manzanas/crear", values)
      .then((res) => {
        console.log(res);
        alert("Manzana creada")
        navigate("/admin/manzanas");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <p className="h1 text-muted mb-3">Crea una nueva manzana</p>
          <div className="mb-3">
            <label htmlFor="nombre_m" className="form-label fw-bold fs-5">Nombre</label>
            <input
              type="text"bre
              placeholder="Digite el nombre"
              name="nombre_m"
              id="nombre_m"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values,nombre_m: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="localidad_m" className="form-label fw-bold fs-5">Localidad</label>
            <input
              type="text"
              placeholder="Digite la localidad"
              name="localidad_m"
              id="localidad_m"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values,localidad_m: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="direccion_m" className="form-label fw-bold fs-5">Dirección</label>
            <input
              type="text"
              placeholder="Digite la dirreción"
              name="direccion_m"
              id="direccion_m"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, direccion_m: e.target.value })
              }
            />
          </div>
          {/* <div className="mb-3">
          <label htmlFor="fk_municipios" className="form-label fw-bold fs-5">Municipio</label>
                <input
                  type="text"
                  placeholder="Distrito Capital"
                  name="fk_municipios"
                  id="fk_municipios"
                  className="form-control"
                  disabled
                  value={1}
                  onChange={(e) =>
                    setValues({ ...values, fk_municipios: e.target.value })
                  }
                />
          </div> */}
          <button className="btn btn-outline-success m-1" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManzaCrear;