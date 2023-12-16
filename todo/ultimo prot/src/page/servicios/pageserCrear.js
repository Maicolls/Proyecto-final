import React from 'react'
import Header from '../../components/header'
import SerCrear from '../../components/servicios/serCrear'

function PageserCrear() {
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
        <SerCrear/>
    </div>
  )
}

export default PageserCrear
