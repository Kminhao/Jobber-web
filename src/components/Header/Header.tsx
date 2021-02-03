import React from 'react';

import Logo from '../../assets/logo.png';

import './style.css'



const Header = () => {
    return (
        <div className="container">            
            <div className="header">         
                <div className="navbar">                  
                    <div id="part1">
                        <a href="">Quem Somos</a>
                        <a href="">Nossos Serviços</a>
                        <a href="">Suporte</a>
                        <a href="">Seja um Parceiro de Negócios</a>
                    </div>

                    <div id="part2">                       
                        <a href="">Log In </a> <br/>
                        <hr/> 
                        <a href=""> Sign Up </a>

                        
                    </div>
                    
                </div>
               
            </div>
        </div>
        
        
    );
}


export default Header;