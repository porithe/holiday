import React, { Component } from 'react';
import './Gallery.scss';

class Gallery extends React.Component {


    render() {
        return (
            <div className={"gallery"}>
                <div className="gallery-topbar">
                    <h1>Galeria</h1>
                </div>
                <div className="gallery-images">
                    <img className={"img-zoom"} src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                    <img src={require('../images/room.jpg')}/>
                </div>
            </div>
        )
    }
}

export default Gallery;
