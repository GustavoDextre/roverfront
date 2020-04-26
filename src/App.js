import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import ContenidoPrincipal from './components/js/contenido_pagprincipal';
import Login from './components/js/login';
import Contacto from './components/js/contacto';
import Registro from './components/js/registro';
import PanelVideo from './components/js/panel_video';
import QuienesSomos from './components/js/quienesSomos';

class App extends Component {
  render(){
    return(
      <div className="fondoprincipal">
        <Switch>
        <Route path="/roverfront" exact component={ContenidoPrincipal}/>
        <Route path="/login" component={Login}/>
        <Route path="/registrar" component={Registro}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/streaming" component={PanelVideo} />
        <Route path="/quienesSomos" component={QuienesSomos} />
        </Switch>
      </div>);
  }
    
}

export default App;
