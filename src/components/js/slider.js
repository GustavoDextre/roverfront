import React, { useState } from 'react';
import ImagesSlider from './imagesSlider';
import 'font-awesome/css/font-awesome.min.css'
import '../css/slider.css';

//fotos
import f1 from '../../images/imagesSlide/foto1.jpg';
import f2 from '../../images/imagesSlide/foto2.jpg';
import f3 from '../../images/imagesSlide/foto3.jpg';
import f4 from '../../images/imagesSlide/foto4.jpg';

function Slider() {

    const [x,setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (pasador.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (pasador.length - 1) ? setX(0) : setX(x - 100);
    };

    let pasador = [
    <ImagesSlider src={f1}/>,
    <ImagesSlider src={f2}/>,
    <ImagesSlider src={f3}/>,
    <ImagesSlider src={f4}/>];

    return (
        <div className="slider">
            {pasador.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}><i className="fa fa-chevron-left"></i></button>
            <button id="goRight" onClick={goRight}><i className="fa fa-chevron-right"></i></button>
        </div>
    )
}

export default Slider;