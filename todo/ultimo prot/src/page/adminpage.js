import React from 'react'
import Header from '../components/header'

function Adminpage() {
  return (
    <div>
      <Header
                boton1="Manzanas"   
                boton2="Propuestas"
                link2="/admin/propuestas"
                boton3="Reportes"
                link3="/admin/reportes"
                boton4="Administrar"
                boton41="establecimiento"
                link41="/admin/establecimiento"
                boton42="Manzanas"
                link42="/admin/manzanas"
                boton43="Servicios"
                link43="/admin/servicios"/>
    </div>
  )
}

export default Adminpage
