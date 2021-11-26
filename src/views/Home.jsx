import React, {useState} from "react";
import "../styles/Home.scss";
import Aos from "aos";
import BrandSign from "../components/BrandSign";
import picture from "../pictures/avatar.png";
import picture2 from "../pictures/avatar2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// TODO: Insert Globe svg or FontAwesome 

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
            {/* <div className="triangle-left"></div>
            <div className="triangle-right"></div>             */}
        </section>

        <section className="about">
            {/* <Divider /> */}
            {/* <div className="rectangle">Rectagle</div> */}
            {/* <h2 className="welcome">&#10092;Hello World ! &#47;&#10093;</h2> */}
                <div className="link-container">
                    <div className="avatar" onMouseOver={changeOnHover} onMouseLeave={changeOnLeave}>
                        <img className="avatar-pic" src={changePic} />
                    </div>
                    <Link to="/story">
                    <div className="txt-box">
                        <h2 className="welcome"><span className="brackets">&#10092;</span>Hello World ! <span className="brackets">&#47;&#10093;</span></h2>
                        <p>Hi I'm Jan, a 39 year old web fanatic from cologne, that just finished a one year intensive training in Full Stack Webdevolepment. On this site I'm telling my story and how I got into my new passion Coding. </p>
                        <button>My Story</button>
                    </div>
                    </Link>
                    <div className="shape-container">
                        <div className="shape">Test</div>
                    </div>
                    
                    {/* <div className="trapez-container">
                        <div className="trapez"></div>
                    </div> */}
                </div>
                
        </section>
    </main>

    );
}

export default Home;