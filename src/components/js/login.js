import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CabezaDos from './cabeza2';
import Navegacion from './navegacion';
import '../css/login.css';

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    /*fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });*/
  }

  render() {
    return <div>
      <CabezaDos/>
      <Navegacion/>
    <div className="fondo">
      <section className="container-fluid bgfuture">
        <section className="row justify-content-center">
          <section className="col-10 col-sm-8 col-md-6">
            <form className="form-container col-md-12 mb-5" onSubmit={this.onSubmit}>
              <div className="text-center font-weight-bold textfone nexa"><h3>Ingresar al sistema</h3></div>
              <div className="form-group nexa">
                <label htmlFor="exampleInputCodigo1">Nombre de usuario</label>
                <input 
                  type="text" 
                  name="username" 
                  className="form-control" 
                  id="usuario" 
                  placeholder="Usuario"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  required
                  />
              </div>

                <div className="form-group nexa">
                  <label htmlFor="contra">Contraseña</label>
                  <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    id="contra" 
                    placeholder="Contraseña"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                    />
              </div>
                  <button type="submit" value="Submit" className="btn-block btn fondoprincipal text-white nexa">Ingresar</button>
                  <div className="text-center nexa mt-3">
                    <h6>¿Aún no tienes cuenta?<br /><Link className="textfone" to="/registrar">Haz click aquí</Link></h6>
                  </div>
            </form>
      </section>
    </section>
    </section>
    </div>
    </div>
  }
}
