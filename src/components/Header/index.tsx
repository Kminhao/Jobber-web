import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './style.css'

function Header() {
    return (
        <div className="container">
            <header className="header">
                <div className="img">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div className="navbar">

                    <Link to="/">Inicio</Link>
                    <Link to="/">Quem Somos</Link>
                    <Link to="/">Nossos Serviços</Link>
                    <Link to="/contact">Seja um Parceiro de Negócios</Link>
                    <div id="log">
                        <Link to="">Log In <hr /> Sign Up</Link>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;