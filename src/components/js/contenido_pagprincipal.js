import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/pagina_principal.css';
import Slider from './slider';

import logoerc from '../../images/logoerc.png';
import fotodescripcion from '../../images/fotoDescripcion.jpg';
import UNI from '../../images/UNI.png';
import ASME from '../../images/logoasme.png';
import historia from '../../images/historia.jpg';

export default class ContenidoPrincipal extends Component {

  styleOne() {
    return {
      marginTop: '30px'
    }
  }

  stylePhotoPumii() {
    return {
      height: '200px',
      width: '200px'
    }
  }

  stylePhotoTeamPumii() {
    return {
      height: '20%',
      width: '100%'
    }
  }

  stylePhotoERC(){
    return {
      width: '50%'
    }
  }

  stylePhotoFootAsme(){
    return{
      width: '40%'
    }
  }

  stylePhotoFootUni(){
    return{
      width: '20%'
    }
  }

  stylePhotoHistoria(){
    return{
      width: '100%'
    }
  }

  render() {
    return (
      <div>

      <div className="container-fluid" style={this.styleOne()}>
        <div className="row">
            <div className="col-md-6 py-5 text-center text-white">
              <p className="h1 font-weight-bold">PERÚ UN MODELO DE</p>
              <p className="h3 font-weight-bold">INVESTIGACIÓN E INGENIERÍA</p>
              <p className="h5 font-weight-bold">ERC POLONIA 2020</p>
            </div><br/>
            <div className="container-fluid col-md-6 py-5 imageERC text-center">
            <img src={logoerc} style={this.stylePhotoERC()} alt="Foto Logo ERC" />
            </div><br/>
        </div>
      </div>

      <div className="container-fluid bg-light" style={this.styleOne()}>
        <div className="row justify-content-center">
            <div className="col-md-6 py-5">
            <p className="h5 text-asme rellenotres">Somos un equipo multidisciplinario<br/> formado en la Facultad de Ingeniería<br/> Mecánica de la Universidad Nacional<br/> de Ingeniería UNI.</p>
            </div><br/>
            <div className="container col-md-6 py-5 text-center">
            <img src={fotodescripcion} style={this.stylePhotoERC()} alt="Foto entrada" />
            </div><br/>
        </div>
        <div className="row justify-content-center py-3">
          <div className="footdescuno col-md-4"><img src={UNI} style={this.stylePhotoFootUni()} alt="Foto UNI" /></div>
          <div className="footdescdos col-md-4"><img src={ASME} style={this.stylePhotoFootAsme()} alt="Foto ASME UNI" /></div>
        </div>
      </div>

      <div className="container" style={this.styleOne()}>
        <div className="row justify-content-around">
            <div className="col-lg-5 py-5 imageERC text-center">
            <img src={historia} style={this.stylePhotoHistoria()} alt="Foto Logo ERC" />
            </div><br/>
            <div className="col-lg-5 py-5 text-center text-white">
              <p className="h1 font-weight-bolder">HISTORIA</p>
              <p className="h5 font-weight-bold">PUMII UNI PERÚ</p>
              <p>El equipo PUMII UNI se formó en el 2019 en el corazón de la Facultad de Ingeniería Mecánica de la Universidad Nacional de Ingeniería con el apoyo de la Sección Estudiantil ASME UNI la cual es la rama estudiantil de la American Society of Mechanical Engineers con sede en la UNI.
            En el mes de abril del año 2019 participamos en Human Exploration Rover Challenge HERC evento de talla internacional promovido por la NASA que tiene como objetivo fomentar en diferentes instituciones educativas en todo el mundo habilidades de diseño mecánico, construcción de prototipos y electrónica orientados al rubro de exploración aeroespacial y logramos ser reconocidos con el AIAA Telemetry Award, que fue otorgado a la mejor propuesta e implementación en el área de electrónica y telemetría .
            Así mismo con la idea de superarnos continuamente el equipo tomó conocimiento sobre el evento European Rover Challenge y desde entonces se trazó como nuevo objetivo participar y destacar en esta competencia. Desde entonces se han sumado apoyos importantes para el proyecto que presentaremos en septiembre durante la competencia del ERC llevada a cabo en Polonia. Se sumaron egresados e interesados en el sector aeroespacial.

            Nuestra visión como equipo es ser guías para futuros grupos de trabajo e investigación como parte de nuestra responsabilidad para con nuestro país.</p>
            </div><br/>
        </div>
      </div>

      <div className="container-fluid retos" style={this.styleOne()}>
        <div className="container py-5">
        <div className="row">
        <div className="col-md-6 text-white">
            <h2 className="font-weight-bold">QUIENES SOMOS</h2>
            <p className="font-weight-bold">Un equipo multidisciplinario formado en la Facultad de Ingeniería Mecánica de la Universidad Nacional de Ingeniería UNI.</p>

            <br />
            <h2 className="font-weight-bold">QUE QUEREMOS LOGRAR</h2>
            <p className="font-weight-bold">Reforzar el trabajo colectivo que se da entre ciertas casas de estudio como universidades, intitutos y la industria.</p>

            <br />
            <h2 className="font-weight-bold">QUE QUEREMOS HACER ESTE AÑO</h2>
            <p className="font-weight-bold">Lograr reconocimiento internacional en el mejor evento de robótica del mundo: European Rover Challenge ERC 2020.</p>

            <br />
            <h2 className="font-weight-bold">QUE SOMOS CAPACES DE HACER</h2>
            <p className="font-weight-bold">Tenemos un equipo multidisciplinario que nos permite dar solución a necesidades adversas presentes en los procesos estándares de la industria peruana.</p>

            <br />

            </div>
          </div>
        </div>
      </div>

      

    <div className="container-fluid bg-light py-5 mt-0">
        <div className="row justify-content-center">
            <div className="col-md-8 text-left">
              <div className="h1 font-weight-bolder mb-0">NOSOTROS</div>
              <div className="h5 font-weight-bold mt-0">EQUIPO PERUANO 2020</div>
            </div>
            <div className="col-md-8 text-center py-3">
              <Slider />
            </div>
        </div>
      </div>

      
    
    </div>
    )
  }
}