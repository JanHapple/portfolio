import React from "react";
import "../styles/Home.scss";
import Aos from "aos";
import BrandSign from "../components/BrandSign";
import Divider from "../components/Divider";
import picture from "../pictures/JanHapple.jpg";

Aos.init();

const Home = () => {
    return(
    <main>
        <section className="brand-container">
            <div className="square"></div>
            <div className="first-rectangle"></div>
            <div className="second-rectangle"></div>
            <div className="test"></div>
            <BrandSign className="brand typewriter-text"/>
            {/* <div className="triangle-left"></div>
            <div className="triangle-right"></div>             */}
        </section>

        <section className="about">
            <Divider />
            {/* <div className="rectangle">Rectagle</div> */}
            <h2 className="welcome">Welcome to my Website</h2>
            <div className="pic-box">
                <img src={picture} />
            </div>
            <p>Hi I'm Jan, </p>
        </section>
    </main>

    );
}

export default Home;