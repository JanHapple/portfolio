import React, { useEffect, useState } from 'react';
import "../styles/_variables.scss";
import "../styles/_reset.scss";
import "../styles/Navbar.scss";
import { Squash as Hamburger } from 'hamburger-react'
// import { CgMenuGridO } from "react-icons/cg";
// import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    // const [changeBurgerMenu, setchangeBurgerMenu] = useState("")

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
        // let menuburger = document.querySelector(".headerContentToggle");
        // menuburger.classList.toggle("hamburgerChange");

    };

    const burgerChange = () => {
        let menuburger = document.querySelector(".burgerchange");

        if (menuburger.classList.contains("change")) {
            menuburger.classList.add("hamburgerChange");
            menuburger.classList.remove("change");
        } else {
            menuburger.classList.add("change");
            menuburger.classList.remove("hamburgerChange");
        }
    }
    
    return(
        <header className="header">
            <div className="headerContent">
                <h2 className="headerContentLogo"><span className="bracket">&#123;</span><span className="brand">jh</span><span className="bracket">&#125;</span></h2>
            
                <nav className={`headerContent ${menuOpen ? `isMenu` : ""}`}>
                    <ul className="navList">
                        <li>
                            <a href="/">My Story</a>
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
                <div className={"headerContentToggle"} onClick={menuToggleHandler}>
                   
                    {/* <div className="change burgerchange" onClick={burgerChange}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>       
                    </div> */}
                    <Hamburger size={25} className="change burgerchange" onClick={burgerChange}/>
                    {/* {!menuOpen ? (<CgMenuGridO onClick={menuToggleHandler} />) : (<AiOutlineClose onClick={menuToggleHandler}/>)} */}
                </div>
            </div>
        </header>
    )
    
}

export default Navbar;