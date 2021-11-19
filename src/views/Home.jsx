import React from "react";
import "../styles/Home.scss";
import Aos from "aos";
import BrandSign from "../components/BrandSign";

Aos.init();

const Home = () => {
    return(
    <main>
        <section className="brand-container">
            <BrandSign className="brand typewriter-text"/>
            {/* <div className="triangle-left"></div>
            <div className="triangle-right"></div>             */}
        </section>

        <section className="about">
            <h1>Welcome to my Website</h1>
        </section>
    </main>

    );
}

export default Home;