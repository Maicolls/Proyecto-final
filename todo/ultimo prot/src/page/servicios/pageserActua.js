import React from 'react'
import Header from '../../components/header'
import SerActua from '../../components/servicios/serActua'

function PageserActua() {
  return (
      <div className="bg-dark vh-100">
      <Header
                boton1="Manzanas" 
                link1="/admin"  
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
        <SerActua/>
    </div>
  )
}

export default PageserActua
