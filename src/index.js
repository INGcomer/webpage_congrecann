// React
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Redirect from './components/basics/Redirect/Redirect';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import MetaPixel from './utils/meta/metaPixel';


import Index from './components/Index/Index';
import Expocitores from "./components/Expocitores/Expocitores";
import Disertantes from './components/Disertantes/Disertantes';
import VentaEntradas from './components/VentaEntradas/VentaEntradas';
import Conferencias from './components/Actividades/Conferencias/Conferencias';
import DashBoard from './components/DashBoard/DashBoard';
import B2B from './components/B2B/B2B';
import B2BLogIn from './components/B2B/B2BLogIn';
import CargaInfo from './components/CargaInfo/CargaInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MetaPixel/> */}
    <BrowserRouter>
      <Routes>
        {/* paguina de inicio */}
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />

        <Route path="/expocitores" element={<Expocitores />} />
        <Route path="/expositores" element={<Expocitores />} />

        <Route path="/disertantes" element={<Disertantes />} />

        <Route path="/actividades/conferencias" element={<Conferencias />} />

        <Route path="/dashboard" element={<DashBoard />} />
        <Route path='/cargaInfo' element={<CargaInfo/>} />

        <Route path="/B2B" element={<B2B />} />

        <Route path="/B2B/Login" element={<B2BLogIn />} />

        <Route
          path="/venta-entradas"
          element={<Redirect loc="https://www.showstickets.ar/event/mendocann" />}
          // element={<VentaEntradas />}
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
