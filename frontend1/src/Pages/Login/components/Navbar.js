import React from "react";
// import logo from "../imgs/esi-logo-removebg-preview.png"
import logo from "../imgs/esi-logo-removebg-preview.png"

function Navbar(){
    return(
        <nav>
            <img src={logo} alt="Logo" />
            <h1>ESI SBA</h1>
        </nav>
    )
}

export default Navbar;