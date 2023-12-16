import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Municipios() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/admin/establecimiento")
      .then((res) => { setData(res.data) })
      .catch((err) => console.log(err));
  });
  const handleDelete = (id_establecimiento) => {
    axios.delete("http://localhost:4000/admin/establecimiento/eliminar/" + id_establecimiento)
      .then((res) => {
        /* alert("Municipio eliminado") */
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex h-75 bg-success justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 table-responsive">
        <div className="d-flex">
          <p className="h1">Establecimiento</p>
          <Link to="/admin" className="btn btn-outline-info m-2">
            Volver
          </Link>
        </div>

        <div className="d-flex justify-content-end">
          <Link to="/admin/establecimiento/crear" className="btn btn-outline-success m-1">
            Crear +
          </Link>
        </div>
        <table className="table table-bordered border-success-subtle">
          <thead className="table table-hover table-success">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>administrador</th>
              <th>direccion</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data && data.map((establecimiento, index) => {
              return (
                <tr key={index}>
                  <td>{establecimiento.id_establecimiento}</td>
                  <td>{establecimiento.nombre_e}</td>
                  <td>{establecimiento.administrador_e}</td>
                  <td>{establecimiento.direccion_e}</td>

                  <td>
                    <Link to={`/admin/establecimiento/leer/${establecimiento.id_establecimiento}`} className="btn btn-outline-secondary m-1">
                      Mostrar información
                    </Link>
                    <Link to={`/admin/establecimiento/editar/${establecimiento.id_establecimiento}`} className="btn btn-outline-warning m-1">
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(establecimiento.id_establecimiento)} className="btn btn-outline-danger m-1">
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Municipios;