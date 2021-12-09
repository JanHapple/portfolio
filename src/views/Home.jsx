import React, {useState} from "react";
import "../styles/Home.scss";
import Aos from "aos";
import BrandSign from "../components/BrandSign";
import picture from "../pictures/avatar.png";
import picture2 from "../pictures/avatar2.png";
import git from "../pictures/git.png";
import css3 from "../pictures/css3.png";
import html5 from "../pictures/html5.png";
import javascript from "../pictures/javascript.png";
import mongodb from "../pictures/mongodb.png";
import react from "../pictures/react.png";
import sass from "../pictures/sass.png";
import node from "../pictures/node.png";
import code1 from "../pictures/code1.png";
import code2 from "../pictures/code2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptopCode, faCog, faDatabase, faServer, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

// TODO: Insert Globe svg or FontAwesome 
const globe = <FontAwesomeIcon className="globe" icon={faGlobe} />
const laptop = <FontAwesomeIcon className="laptop" icon={faLaptopCode} />
const database = <FontAwesomeIcon className="database" icon={faDatabase} />
const cog = <FontAwesomeIcon className="cog" icon={faCog} />
const branch = <FontAwesomeIcon className="cog" icon={faCodeBranch} />
const server = <FontAwesomeIcon className="cog" icon={faServer} />


Aos.init();

const Home = () => {
    const [changePic, setChangePic] = useState(picture);

    const changeOnHover = () => {
        setChangePic(picture2)
    }

    const changeOnLeave = () => {
        setChangePic(picture)
    }

    return(
    <main>
        <section className="brand-container">
            <div className="square"></div>
            <div className="first-rectangle"></div>
            <div className="second-rectangle"></div>
            <BrandSign className="brand typewriter-text"/>
        </section>

        <section className="about">
            <Link to="/about">
                <div className="link-container">
                    <div className="avatar" onMouseOver={changeOnHover} onMouseLeave={changeOnLeave}>
                        <img className="avatar-pic" src={changePic} />
                    </div>
                    
                    <div className="txt-box">
                        <h2 className="welcome"><span className="brackets">&#10092;</span>Hello World ! <span className="brackets">&#47;&#10093;</span></h2>
                        <p>Hi I'm Jan, a 39 year old web fanatic from cologne, that just finished a one year intensive training in Full Stack Webdevolepment. On this site I'm telling my story and how I got into my new passion Coding. </p>
                        <button>My Story</button>
                    </div>
                    <div className="shape-container">
                        <div className="shape"></div>
                        {globe}
                    </div>
                </div>
            </Link>
        </section>

        <section className="skills">
            <Link to="/story">
                <div className="link-container">
                        <div className="skills-cover">
                            {/* <div className="laptop-box">{laptop}</div>
                            <div className="database-box">{database}</div>
                            <div className="cog-box">{cog}</div> */}
                            {/* <div className="cog-box-2">{cog}</div> */}
                            {/* <div className="branch">{branch}</div>
                            <div className="server">{server}</div> */}
                            <img className="code" src={code2} />
                            <img className="html picture" src={html5} />
                            <img className="css picture" src={css3} />
                            <img className="javascript picture" src={javascript} />
                            <img className="mongodb picture" src={mongodb} />
                            <img className="git picture" src={git} />
                            <img className="react picture" src={react} />
                            <img className="sass picture" src={sass} />
                            <img className="node picture" src={node} />

                        </div>
                        
                        <div className="txt-box">
                            <h2 className="welcome"><span className="brackets">&#10092;</span>Hello World ! <span className="brackets">&#47;&#10093;</span></h2>
                            <p>Hi I'm Jan, a 39 year old web fanatic from cologne, that just finished a one year intensive training in Full Stack Webdevolepment. On this site I'm telling my story and how I got into my new passion Coding. </p>
                            <button>My Story</button>
                        </div>
                    <div className="shape-container">
                        <div className="shape"></div>
                    </div>
                </div>
            </Link>
        </section>
    </main>

    );
}

export default Home;