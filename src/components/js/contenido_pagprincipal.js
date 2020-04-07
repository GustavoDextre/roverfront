import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/pagina_principal.css';
import Slider from './slider';

import logoPummii from '../../images/PUMII.png';
import teamPumii from '../../images/teamPumii.jpg';

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

  render() {
    return (
      <div className="container text-white" style={this.styleOne()}>
        <div className="row">

          <div className="col-md-4">
            <h2 className="text-center">Acerca de Nosotros</h2>
            <div className="p-3 text-center">
              <img src={logoPummii} style={this.stylePhotoPumii()} alt="Foto PUMII UNI" />
            </div>
            <p>PUMII PERU es un equipo multidisciplinario creado en la Universidad Nacional de Ingeniería cuyo objetivo es fomentar la investigación aplicada en los diferentes sectores industriales desarrollados y sectores en etapa de desarrollo como el Aeroespacial</p>
            <h3>Nuestras redes sociales</h3>
            <p>Entra a cualquiera de nuestras redes sociales haciendo click en una de ellas.</p>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link text-white" href="https://instagram.com/pumiiperu?fbclid=IwAR2_IdoO_HwYQnc16OLlTbyB7tjUgxmsd7VzlORs7kpmKTt-43gZzBJm-iU"  rel="noopener"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://www.facebook.com/PUMII-PERU-101383817924692/?ref=page_internal"><i className="fa fa-facebook" aria-hidden="true"></i> facebook</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://pe.linkedin.com/in/pumii-peru-6615131a4"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://www.youtube.com/channel/UCUSZaNY3yFJiNMLPIY0yGTQ?view_as=subscriber" ><i className="fa fa-youtube" aria-hidden="true" rel="noopener"></i> Youtube</a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>


          <div className="col-md-8">
            <h2>QUIENES SOMOS</h2>
            <p>Un equipo multidisciplinario formado en la Facultad de Ingeniería Mecánica de la Universidad Nacional de Ingeniería UNI.</p>
            <div className="p-3">
              <img src={teamPumii} style={this.stylePhotoTeamPumii()} alt="Foto PUMII UNI" />
            </div>

            <br />
            <h2>QUE QUEREMOS LOGRAR</h2>
            <p>Reforzar el trabajo colectivo que se da entre ciertas casas de estudio como universidades, intitutos y la industria.</p>

            <br />
            <h2>QUE QUEREMOS HACER ESTE AÑO</h2>
            <p>Lograr reconocimiento internacional en el mejor evento de robótica del mundo: European Rover Challenge ERC 2020.</p>

            <br />
            <h2>QUE SOMOS CAPACES DE HACER</h2>
            <p>Tenemos un equipo multidisciplinario que nos permite dar solución a necesidades adversas presentes en los procesos estándares de la industria peruana.</p>

            <br />
            <h2>NUESTRA HISTORIA</h2>
            <p>El equipo PUMII UNI se formó en el 2019 en el corazón de la Facultad de Ingeniería Mecánica de la Universidad Nacional de Ingeniería con el apoyo de la Sección Estudiantil ASME UNI la cual es la rama estudiantil de la American Society of Mechanical Engineers con sede en la UNI.
            En el mes de abril del año 2019 participamos en Human Exploration Rover Challenge HERC evento de talla internacional promovido por la NASA que tiene como objetivo fomentar en diferentes instituciones educativas en todo el mundo habilidades de diseño mecánico, construcción de prototipos y electrónica orientados al rubro de exploración aeroespacial y logramos ser reconocidos con el AIAA Telemetry Award, que fue otorgado a la mejor propuesta e implementación en el área de electrónica y telemetría .
            Así mismo con la idea de superarnos continuamente el equipo tomó conocimiento sobre el evento European Rover Challenge y desde entonces se trazó como nuevo objetivo participar y destacar en esta competencia. Desde entonces se han sumado apoyos importantes para el proyecto que presentaremos en septiembre durante la competencia del ERC llevada a cabo en Polonia. Se sumaron egresados e interesados en el sector aeroespacial.

            Nuestra visión como equipo es ser guías para futuros grupos de trabajo e investigación como parte de nuestra responsabilidad para con nuestro país.
                </p>

          </div>

          <br />
          <div className="p-3 text-center">
            <h2>NUESTRAS FOTOS</h2>
            <Slider />
          </div>

          
        </div>
    </div>
    )
  }
}