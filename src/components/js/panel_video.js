import React, { Component } from 'react';
import '../css/panel_video.css';

import PUMII from '../../images/PUMII.png';
import UNI from '../../images/UNI.png';

export default class PanelVideo extends Component {

    state = {
        date: new Date()
    };

    callMe(){
        setInterval(() => {
            this.setState({ date: new Date()});
        }, 1000);
    }

    months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    hora = this.state.date.getHours() % 12? this.state.date.getHours() % 12:"12";
    notation = this.state.date.getHours() >= 12? "PM":"AM";

    render() {
        return (
            <div className="fondo">
                <section className="container-fluid">
                <section className="row py-5">
                <section className="col-lg-3 text-center">
                    <div className="fotoPanel">
                        <img className="cuadro2" src={PUMII} alt="Imagen PUMII UNI"/>
                    </div>
                </section>
            
                <section className="col-md-12 col-lg-6 text-center">
                    <div className="my-3 text-center" name="_reloj">
                    <h6 className="text-white py-1 bgfuture bg-dark">
                    Número de personas conectadas :<div id="conexiones"></div>
                    </h6>
                    <iframe id="cuadro" src="example.html" frameBorder="0" title="Transmition..."></iframe>

                    <h6 className="text-white py-2 bgfuture bg-dark">
                        Tiempo de streaming : 
                    </h6>
                    
                    <br/>

                    <h6 className="text-white py-2 bg-dark">
                     Fecha: { this.days[this.state.date.getDay()] + ', ' 
                            + ('0' + this.state.date.getDate()).slice(-2) + ' de ' 
                            + this.months[this.state.date.getMonth()] + ' del ' 
                            + this.state.date.getFullYear()} 

                        <br/>

                     Hora: {('0' +this.hora).slice(-2)+':'
                            +('0' + this.state.date.getMinutes()).slice(-2)+':'
                            +('0' +this.state.date.getSeconds()).slice(-2) + ' '
                            +this.notation}
                        
                        {this.callMe()}
                    </h6>

                    </div>
                    
                </section>
            
                <section className="col-lg-3 text-center">
                    
                    <div className="fotoPanel">
                        <img className="cuadro2" src={UNI} alt="Imagen Logo UNI"/>
                    </div>
                </section>

            </section>
            </section>
            </div>
        )
    }
}
