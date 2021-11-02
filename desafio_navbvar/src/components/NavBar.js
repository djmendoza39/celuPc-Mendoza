import React from 'react';

function NavBar(){
    return(
        <div className="NavBar">

            <header ClassName="miEstiloHeader">
                <a ClassName="estiloMi-Logo" href="#">CeluPc</a>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#">Registrate</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default NavBar;