import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ManzaActua() {
  const { id_manzanas } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombre_m: '',
    localidad_m: '',
    direccion_m: '',
  });

  useEffect(() => {
    axios.get("http://localhost:4000/admin/manzanas/leer/" + id_manzanas)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          nombre_m: res.data[0].nombre_m,
          localidad_m: res.data[0].localidad_m,
          direccion_m: res.data[0].direccion_m,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("no funciona");
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
      axios.put(`http://localhost:4000/admin/manzanas/editar/${id_manzanas}`, values)
        .then((res) => {
          alert("Se ha actualizado");
          console.log(res)
          navigate("/admin/manzanas");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <p className="h1">Actualiza la manzana</p>
          <div className="mb-3">
            <label htmlFor="nombre_m">Nombre: </label>
            <input
              type="text"
              placeholder="Digite su nombre"
              name="nombre_m"
              id="nombre_m"
              className="form-control"
              required
              value={values.nombre_m}
              onChange={(e) =>
                setValues({ ...values, nombre_m: e.target.value})
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="localidad_m" className="form-label">Localidad: </label>
            <input
              type="text"
              placeholder="Digite su apellido"
              name="localidad_m"
              id="localidad_m"
              className="form-control"
              required
              value={values.localidad_m}
              onChange={(e) =>
                setValues({...values, localidad_m: e.target.value})
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="direccion_m">Dirreción: </label>
            <input
              type="text"
              placeholder="Digite su télefono"
              name="direccion_m"
              id="direccion_m"
              className="form-control"
              required
              value={values.direccion_m}
              onChange={(e) =>
                setValues({...values, direccion_m: e.target.value})
              }
            />
          </div>
          <button className="btn btn-success">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManzaActua;