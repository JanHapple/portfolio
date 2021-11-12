import React from "react";
import "../styles/_variables.scss";
import "../styles/_reset.scss";
import "../styles/navbar.scss";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
    
}

export default Navbar;