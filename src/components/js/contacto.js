import React, { Component } from 'react';
import '../css/login.css';
import 'font-awesome/css/font-awesome.min.css';


export default class Contacto extends Component {

  onSubmit = e => {
    e.preventDefault();
  }

    render() {
        return (
          <div className="fondocontacto pt-5">
          <section className="container-fluid bgfuture">
            <section className="row justify-content-center">
              <section className="col-10 col-sm-8 col-md-6">
                <form className="form-container col-md-12 mb-5" onSubmit={this.onSubmit}>
                  <div className="text-center font-weight-bold textfone rockwell"><h3>Contactar a PUMII PERÚ</h3></div>
                  <div className="form-group nexa">
                    <label htmlFor="exampleInputCodigo1">Nombre de usuario:</label>
                    <input type="text" name="username" className="form-control" id="usuario" placeholder="Usuario" />
                  </div>
                    <div className="form-group nexa">
                      <label htmlFor="contra">Contraseña:</label>
                      <input type="password" name="password" className="form-control" id="contra" placeholder="Contraseña" />
                    </div>

                    <div className="form-group nexa">
                      <label htmlFor="exampleFormControlTextarea1">Mensaje:</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                      <button type="submit" className="btn-block btn fondoprincipal text-white nexa">Enviar</button>
                </form>
          </section>
        </section>
        </section>
        </div>
    )
  }
}