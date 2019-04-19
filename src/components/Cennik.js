import React, { Component } from 'react';
import './Cennik.scss';

function Cennik() {

    return (
        <div className={"cennik"}>
            <div className="desktop">
                <h1>Cennik</h1>
                <div className="ceny">
                    <ul>
                        <li>Pokój 3-osobowy: 120zł / dzień</li>
                        <li>Pokój 4-osobowy: 160zł / dzień</li>
                        <li>Pokój 5-osobowy: 200zł / dzień</li>
                        <li>Pokój 6-osobowy: 240zł / dzień</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cennik;
