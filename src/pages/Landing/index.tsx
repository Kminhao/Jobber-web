import React from 'react';
import './style.css'
import Logo from '../../assets/logo.png';


function Landing() {
    return (
        <div className="container">
            <header className="header">
                <div className="img">
                    <a href=""><img src={Logo} alt="" /></a>
                </div>
                <div className="navbar">

                    <a href="">Inicio</a>
                    <a href="">Quem Somos</a>
                    <a href="">Nossos Serviços</a>
                    <a href="">Seja um Parceiro de Negócios</a>
                    <div id="log">
                        <a href="">Log In <hr /> Sign Up</a>

                    </div>
                </div>
            </header>
            <footer className="footer">
                <div className="content">
                    <h2>IJobber Technology</h2>
                </div>
            </footer>

        </div>

    );
}


export default Landing;