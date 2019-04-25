import React, { Component } from 'react';
import './Header.scss';

class Header extends React.Component {

    render() {
        return (
            <header className={"header"}>
                <div className={"header-text"}>
                    <h1>Ustronie Morskie</h1>
                    <h1>Zaprasza</h1>
                </div>
            </header>
        )
    }
}

export default Header;
