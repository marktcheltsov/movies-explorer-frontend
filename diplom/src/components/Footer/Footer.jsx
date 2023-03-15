import './Footer.css';
import { useLocation } from "react-router-dom";
import React from 'react';

function Footer(){
    let location = useLocation()
    const renderFooter = () => {
        if ( location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/profile' || location.pathname === '/not-found') {
            return (
                <></>
            ) 
        } else {
            return (
                <footer className="footer">
                    <div className="footer__container">
                            <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                        <div className="footer__links-container">
                            <p className="footer__links-year">© 2020</p>
                            <ul className="footer__links">
                                <li className="footer__link">Яндекс.Практикум</li>
                                <li className="footer__link"><a href="https://github.com/marktcheltsov" className='footer__link'>Github</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>  
            )
        }
    }
    return (
        renderFooter()
    )
}

export default Footer;