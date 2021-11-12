import React, { useState } from 'react';
import "../styles/_variables.scss";
import "../styles/_reset.scss";
// import "../styles/Navbar.scss";
import classes from "../styles/Navbar.scss";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return(
        <header className="header">
            <div className="headerContent">
                <h2 className="headerContentLogo">Navbar</h2>
            
                <nav className={`headerContent ${menuOpen ? `isMenu` : ""}`}>
                    <ul className="navList">
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Skills</a>
                        </li>
                        <li>
                            <a href="/">Work</a>
                        </li>
                    </ul>
                    <button>Contact</button>
                </nav>
                <div className={"headerContentToggle"}>
                    {!menuOpen ? (<CgMenuGridO onClick={menuToggleHandler} />) : (<AiOutlineClose onClick={menuToggleHandler}/>)}
                </div>
            </div>
        </header>
    )
    
}

export default Navbar;