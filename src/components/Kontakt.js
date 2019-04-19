import React from 'react';
import './Kontakt.scss';

function Kontakt() {
    return(
        <div className="kontakt">
            <div className="desktopKontakt">
                <h1>Kontakt</h1>
                <div className="dane">
                    <ul>
                        <li>E-mail: xyz@xyz.com</li>
                        <li>Nr tel: +48 123 456 789</li>
                        <li>Kołobrzeg, 78-100</li>
                        <li>ul.Grochowska 5</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Kontakt;
