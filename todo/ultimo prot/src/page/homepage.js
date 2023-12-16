import React from "react";
import Card from "../components/card";
import Header from "../components/header";

function Homepage(){
    return(
        <div>
            <Header
                boton1="Inicio"
                link1="/homepage"
                boton2="Manzanas"
                link2="/manzanas"
                boton3="Servicios"
                link3="/servicios"
                boton4="Encuentranos"
                boton41="Facebook"
                link41="https://youtu.be/tAcKfnf0zv4?si=XJo6Tvqs0IHQYyJh"
                boton42="Youtube"
                link42="https://youtu.be/QU9c0053UAU?si=qgfon_uDutbvSLD8"
                boton43="Instagram"
                link43="https://youtu.be/nOI67IDlNMQ?si=vbCxe_aEbJ4mZCZN"
                />
            <div class="container d-flex justify-content-center col-lg-8 col-md-4">
                <Card 
                img={require('../design/img/Logo.png')}
                title="Lavar loza"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <Card 
                img={require('../design/img/Logo.png')}
                title="Hacer aseo"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <Card 
                img={require('../design/img/Logo.png')}
                title="Quedarse en casa"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <Card 
                img={require('../design/img/Logo.png')}
                title="PPP(parir un puto pelao)"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
        </div>
    )
}
export default Homepage