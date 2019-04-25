import React, { Component } from 'react';
import './Gallery.scss';


class Gallery extends React.Component {

    isZoom = false;


    zoomImage = (src) => {
        const widthDevice = window.innerWidth;
        if (this.isZoom === false && widthDevice > 767) {
            const galleryImages = document.querySelector('.gallery-images');
            let newImg = document.createElement("img");
            newImg.src = src;
            newImg.className = "img-zoom";
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
            <div className={"gallery"} id={"gallery"}>
                <div className="gallery-topbar">
                    <h1>Galeria</h1>
                </div>
                <div className="gallery-images">
                    <img onClick={ () => this.zoomImage('/static/media/picture1.bc174531.jpg')} src={require('../images/picture1.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture2.3a5c2279.jpg')} src={require('../images/picture2.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture3.fed55d5a.jpg')} src={require('../images/picture3.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture4.ef038863.jpg')} src={require('../images/picture4.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture5.0fa51d8c.jpg')} src={require('../images/picture5.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture6.95d05bc7.jpg')} src={require('../images/picture6.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture7.16988a04.jpg')} src={require('../images/picture7.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture8.04778605.jpg')} src={require('../images/picture8.jpg')} alt={"zdjecie"} />
                    <img onClick={ () => this.zoomImage('/static/media/picture9.e200b07c.jpg')} src={require('../images/picture9.jpg')} alt={"zdjecie"} />
                </div>
            </div>
        )
    }
}

export default Gallery;
