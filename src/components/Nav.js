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
                        <a href="#">home</a>
                        <a href="#">galeria</a>
                        <a href="#">cennik</a>
                        <a href="#">kontakt</a>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Nav;
