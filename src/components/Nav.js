import React, { Component } from 'react';
import './Nav.scss';
import animateScrollTo from 'animated-scroll-to';


class Nav extends React.Component {

    state = {
        isActive: false,
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }


    scrollTo(item) {
        const widthDevice = window.innerWidth;
        if (widthDevice > 767) {
            const nav = document.querySelector('.nav');
            const block = document.querySelector(item);
            const navHeight = nav.offsetHeight;
            const blockHeight = block.offsetTop;
            animateScrollTo(blockHeight - navHeight)
        }
        else {
            const nav = document.querySelector('nav');
            const block = document.querySelector(item);
            const navHeight = nav.offsetHeight;
            const blockHeight = block.offsetTop;
            animateScrollTo(blockHeight - navHeight)
        }
    }

    componentDidMount() {



        const nav = document.querySelector('.nav');
        const btns = document.querySelectorAll('.btn');
        const logo = document.querySelector('.logo');

        let scrollPosition = window.scrollY;
        let isPosition = false;


        function addScroll() {
            nav.classList.add("nav-color");
            logo.classList.add("logo-color");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.add("btn-color");
                btns[i].classList.add("btn-down-line-color");
                btns[i].classList.remove("btn-down-line");
            }
        }
        function removeScroll() {
            nav.classList.remove("nav-color");
            logo.classList.remove("logo-color");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-color");
                btns[i].classList.remove("btn-down-line-color");
                btns[i].classList.add("btn-down-line");
            }
        }
        window.addEventListener("scroll", function() {
            scrollPosition = window.scrollY;
            scrollPosition > 10 ? isPosition = true : isPosition = false;
            isPosition === true ? addScroll() : removeScroll();
        });

    }


    render() {
        const { isActive } = this.state;

        return (
            <nav>
                <div className={"ham"}>
                    <i className="fas fa-bars ham-button" onClick={this.toggleMenu}></i>
                </div>
                <div className={`nav ${isActive ? "nav nav-show" : "nav"}`}>
                    <div className={"buttons"}>
                        <i className="fas fa-times exit" onClick={this.toggleMenu}></i>
                        <h2 className={"logo"}>HOLIDAY</h2>
                        <a onClick={ () => this.scrollTo('.header')} className={"btn btn-down-line"} href="#">home</a>
                        <a onClick={ () => this.scrollTo('.gallery')} className={"btn btn-down-line"} href="#">galeria</a>
                        <a onClick={ () => this.scrollTo('.cennik')} className={"btn btn-down-line"} href="#">cennik</a>

                        <a onClick={ () => this.scrollTo('.kontakt')} className={"btn btn-down-line"} href="#">kontakt</a>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Nav;
