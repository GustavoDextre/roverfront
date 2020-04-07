import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ImagesSlider({src}) {

    let imgStyles = {
        width: 100+"%",
        height: "auto",
        padding: 0
    }

    return <img src={src} alt="Deslizamiento de imagenes" style={imgStyles}/>;
}

export default ImagesSlider;