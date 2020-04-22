import React from 'react';
import { Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import ContenidoPrincipal from './components/js/contenido_pagprincipal';
import Login from './components/js/login';
import Contacto from './components/js/contacto';
import Registro from './components/js/registro';
import PanelVideo from './components/js/panel_video';
import QuienesSomos from './components/js/quienesSomos';

function App () {
    return(
      <div className="fondoprincipal">
        <Route path="/roverfront" exact component={ContenidoPrincipal}/>
        <Route path="/login" component={Login}/>
        <Route path="/registrar" component={Registro}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/streaming" component={PanelVideo} />
        <Route path="/quienesSomos" component={QuienesSomos} />
      </div>);
}

export default App;
