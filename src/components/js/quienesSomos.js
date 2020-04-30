import React, { Component } from 'react';
import CabezaDos from './cabeza2';
import Navegacion from './navegacion';
import '../css/quienesSomos.css';

import f1 from '../../images/imagesSlide/foto1.jpg';
import f15 from '../../images/imagesSlide/foto15.jpg';
import f19 from '../../images/imagesSlide/foto19.jpg';
import f21 from '../../images/imagesSlide/foto21.jpg';

export default class QuienesSomos extends Component {

    stylePhoto(){
        return{
        width: '80%'
        }
    }
    

  render() {
    return <div className="bg-white child">
      <CabezaDos/>
      <Navegacion/>
      <div className="row"> 
            <div className="text-center">
                <img src={f1} style={this.stylePhoto()} alt="foto" />
                <img src={f15} style={this.stylePhoto()} alt="foto"/>
                <img src={f19} style={this.stylePhoto()} alt="foto"/>
                <img src={f21} style={this.stylePhoto()} alt="foto"/>
            </div>
            
        </div>
    </div>
  }
}
