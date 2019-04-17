import React, { Component } from 'react';
import './Gallery.scss';

class Gallery extends React.Component {

    isZoom = false;

    zoomImage = (src) => {
        if (this.isZoom === false) {
            const galleryImages = document.querySelector('.gallery-images');
            let newImg = document.createElement("img");
            newImg.className = "img-zoom";
            newImg.src = src;
            newImg.onclick = this.delImage;
            galleryImages.appendChild(newImg);
        }
        this.isZoom = true;
    }
    delImage = () => {
        const img = document.querySelector(".img-zoom");
        img.remove();
        this.isZoom = false;
    }

    render() {

        return (
            <div className={"gallery"}>
                <div className="gallery-topbar">
                    <h1>Galeria</h1>
                </div>
                <div className="gallery-images">
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/room.bc174531.jpg')} src={require('../images/room.jpg')} alt={"zdjecie"} />
                </div>
            </div>
        )
    }
}

export default Gallery;
