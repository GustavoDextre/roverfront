import React, { Component } from 'react';
import CabezaDos from './cabeza2';
import Navegacion from './navegacion';
import '../css/login.css';

export default class Registro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      apellidos: '',
      nombres: '',
      username: '',
      email : '',
      password: '',
      cellphone: ''
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
    fetch('https://apijwtrover.herokuapp.com/api/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/roverfront');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

    render() {
        return (
          <div>
            <CabezaDos/>
            <Navegacion/>
            <div className="fondoregistro">
          <section className="container-fluid bgfuture">
            <section className="row justify-content-center">
              <section className="col-10 col-sm-10 col-md-8">
                <form className="form-container col-md-12 mb-5" id="form-registro" onSubmit={this.onSubmit}>
                  <div className="text-center font-weight-bold textfone nexa mb-4">
                    <h3>Bienvenido al registro del sistema</h3>
                  </div>
                  <div className="form-row nexa">
                    <div className="form-group col-md-6">
                      <label htmlFor="apellido">Apellidos Completos</label>
                      <input 
                        type="text"
                        name="apellidos" 
                        className="form-control" 
                        id="apellido" 
                        placeholder="Escriba Apellidos" 
                        value={this.state.apellidos}
                        onChange={this.handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="nombre">Nombres Completos</label>
                      <input 
                        type="text"
                        name="nombres" 
                        className="form-control" 
                        id="nombre" 
                        placeholder="Escriba Nombres" 
                        value={this.state.nombres}
                        onChange={this.handleInputChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row nexa">
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email"
                        name="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required  
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputCodigo1">Nombre de usuario:</label>
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
                  </div>

                  <div className="form-row nexa">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Contraseña</label>
                      <input 
                        type="password"
                        name="password" 
                        className="form-control" 
                        id="inputPassword4" 
                        placeholder="Contraseña"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required  
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="password">Confirmar Contraseña</label>
                      <input 
                        type="password"
                        name="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Contraseña"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-row nexa">
                    <div className="form-group col-md-6">
                      <label htmlFor="cel">Celular</label>
                      <input 
                        type="text"
                        name="cellphone" 
                        className="form-control" 
                        id="cel" 
                        placeholder="Escribir celular"
                        value={this.state.cellphone}
                        onChange={this.handleInputChange}
                        required  
                      />
                    </div>
                  </div>
                  
                  <button type="submit" value="Submit" className="btn-block btn fondoprincipal text-white nexa">Registrarse</button>
                </form>
              </section>
            </section>
          </section>

          </div>
        </div>
    )
  }
}