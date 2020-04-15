import React from 'react';
import { Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import CabezaPrincipal from './components/js/cabeza_pagprincipal';
import Navegacion from './components/js/navegacion';
import ContenidoPrincipal from './components/js/contenido_pagprincipal';
import CabezaDos from './components/js/cabeza2';
import Footer from './components/js/footer';
import Login from './components/js/login';
import Contacto from './components/js/contacto';
import Registro from './components/js/registro';
import PanelVideo from './components/js/panel_video';

function App () {
    return(
      <div className="fondoprincipal">
        <Route path="/" exact>
          <Navegacion/>
          <CabezaPrincipal/>
          <ContenidoPrincipal/>
          <Footer/>
        </Route>
        <Route path="/login">
          <CabezaDos/>
          <Navegacion/>
          <Login/>
        </Route>
        <Route path="/registrar">
          <CabezaDos/>
          <Navegacion/>
          <Registro/>
        </Route>
        <Route path="/contacto">
          <CabezaDos/>
          <Navegacion/>
          <Contacto/>
        </Route>
        <Route path="/streaming">
          <CabezaDos/>
          <Navegacion/>
          <PanelVideo/>
        </Route>
      </div>);
}

export default App;
