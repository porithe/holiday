import React, { Component } from 'react';
import './Nav.scss';

class Nav extends React.Component {

    state = {
        isActive: false,
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }

    componentDidMount() {



        const nav = document.querySelector('.nav');
        const btns = document.querySelectorAll('.btn');
        const logo = document.querySelector('.logo');

        let scrollPosition = window.scrollY;

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

            if (scrollPosition > 10) {
                addScroll();
            }
            else {
                removeScroll();
            }

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
                        <a className={"btn btn-down-line"} href="#">home</a>
                        <a className={"btn btn-down-line"} href="#">galeria</a>
                        <a className={"btn btn-down-line"} href="#">cennik</a>
                        <a className={"btn btn-down-line"} href="#">kontakt</a>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Nav;
