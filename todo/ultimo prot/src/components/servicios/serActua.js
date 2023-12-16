import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SerActua() {
  const { id_servicios } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombre_s: '',
    descripcion_s: '',
    tipo_s: '',
    categoria_s: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/admin/servicios/leer/${id_servicios}`)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          nombre_s: res.data[0].nombre_s,
          descripcion_s: res.data[0].descripcion_s,
          tipo_s: res.data[0].tipo_s,
          categoria_s: res.data[0].categoria_s
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("Ay do, do funciona");
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
      axios.put(`http://localhost:4000/admin/servicios/editar/${id_servicios}`, values)
        .then((res) => {
          alert("Se ha actualizado");
          console.log(res)
          navigate("/admin/servicios");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <p className="h1">Actualiza el servicio</p>
          <div className="mb-3">
            <label htmlFor="nombre_s">Nombre: </label>
            <input
              type="text"
              placeholder="Digite su nombre"
              name="nombre_s"
              id="nombre_s"
              className="form-control"
              required
              value={values.nombre_s}
              onChange={(e) =>
                setValues({ ...values, nombre_s: e.target.value})
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
              value={values.descripcion_s}
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
              value={values.tipo_s}
              onChange={(e) =>
                setValues({ ...values, tipo_s: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
          <label htmlFor="cate_servicios" className="form-label fw-bold fs-5">Categoria</label>
              <input
                type="text"
                placeholder="Digite la categoria del servicio"
                name="categoria_s"
                  id="categoria_s"
                  className="form-control"
                  required
                  value={values.categoria_s}
                  onChange={(e) =>
                    setValues({ ...values, categoria_s: e.target.value })
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

export default SerActua;