
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Form from "./components/registrarse.js";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//Paginas
import Adminpage from "./page/adminpage.js";
import Homepage from "./page/homepage.js";

//Municipios
import Pagemuni from "./page/municipios/pagemuni.js";
import PagemuniCrear from "./page/municipios/pagemuniCrear.js";
import PagemuniLeer from "./page/municipios/pagemuniLeer.js";
import PagemuniActua from "./page/municipios/pagemuniActua.js";

//Manzanas
import Pageman from "./page/manzanas/pageman.js"
import PagemanCrear from "./page/manzanas/pagemanCrear.js";
import PagemanLeer from "./page/manzanas/pagemanLeer.js";
import PagemanActua from "./page/manzanas/pagemanActua.js";

//Servicios
import Pageser from "./page/servicios/pageser.js";
import PageserCrear from "./page/servicios/pageserCrear.js";
import PageserLeer from "./page/servicios/pageserLeer.js";
import PageserActua from "./page/servicios/pageserActua.js";
import Session from "./components/inicio sesion.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*Homepage*/}
        <Route path="/homepage" element={<Homepage/>}/>

        {/* Admin */}
        <Route path="/admin" element={<Adminpage />} />
        

        {/* Municipios */}
        <Route path="/admin/establecimiento" element={<Pagemuni />} />
        <Route path="/admin/establecimiento/crear" element={<PagemuniCrear />} />
        <Route path="/admin/establecimiento/leer/:id_establecimiento" element={<PagemuniLeer />} />
        <Route path="/admin/establecimiento/editar/:id_establecimiento" element={<PagemuniActua />} />

        {/* Manzanas */}
        <Route path="/admin/manzanas" element={<Pageman />} />
        <Route path="/admin/manzanas/crear" element={<PagemanCrear />} />
        <Route path="/admin/manzanas/leer/:id_manzanas" element={<PagemanLeer />} />
        <Route path="/admin/manzanas/editar/:id_manzanas" element={<PagemanActua />} />

        {/* Servicios */}
        <Route path="/admin/servicios" element={<Pageser />} />
        <Route path="/admin/servicios/crear" element={<PageserCrear />} />
        <Route path="/admin/servicios/leer/:id_servicios" element={<PageserLeer />} />
        <Route path="/admin/servicios/editar/:id_servicios" element={<PageserActua />} />

        <Route path="/registrar/persona" element={<Form />} />
        <Route path="/inicio_sesion/persona" element={<Session />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;