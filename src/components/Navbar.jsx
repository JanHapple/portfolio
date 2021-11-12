import React from "react";
import "../styles/_variables.scss";
import "../styles/_reset.scss";
import "../styles/Navbar.scss";

const Navbar = () => {
    return(
        <header className={classes.header}>
            <div className={classes.headerContent}>
                <h2>Navbar</h2>
            </div>
            <nav className={classes.headerContentNav}>
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Skills</a>
                    </li>
                    <li>
                        <a href="/">Work</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Navbar;