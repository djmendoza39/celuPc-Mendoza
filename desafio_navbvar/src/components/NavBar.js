import React from 'react';
import '../App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import logoSitio from '..components/logoTienda.png';
//creando el navbar
function NavBar(){
    return(
        <React.Fragment>
            <div className="miHeader">

                <div className="contenedor_menu">
                    {/* <img className="mi_Estilo_imagen" src={logoSitio} alt="imagen principal logo" /> */}
                    <a href="#" className="miEstiloLogo">CeluPc</a>
                    <nav className="miNavbar">
                        <ul>
                            <li><a className="miEstiloMenu" href="#">Inicio</a></li>
                            <li><a className="miEstiloMenu" href="#">Productos</a></li>
                            <li><a className="miEstiloMenu" href="#">Contactanos</a></li>
                            <li><a className="miEstiloMenu" href="#">Carrito</a></li>
                            <li><a className="miEstiloMenu" href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </React.Fragment>
        
    );
}

export default NavBar;