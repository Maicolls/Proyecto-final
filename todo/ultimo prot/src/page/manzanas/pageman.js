import React from 'react'
import Header from '../../components/header'
import Manzanas from '../../components/manzanas/manzanas'

function Pageman() {
  return (
      <div className="bg-success vh-100">
      <Header
                boton1="registrar"
                link1="/registrar/persona"
                boton2="Mapa del cuidado"
                link2="/admin/propuestas"
                boton4="¿que quiere hacer?"
                boton41="Establecimiento"
                link41="/admin/establecimiento"
                boton42="Manzanas"
                link42="/admin/manzanas"
                boton43="Servicios"
                link43="/admin/servicios"/>
        <Manzanas/>
    </div>
  )
}

export default Pageman
