import React from "react";
import "../styles/Home.scss";
import Aos from "aos";
import BrandSign from "../components/BrandSign";
import Divider from "../components/Divider"

Aos.init();

const Home = () => {
    return(
    <main>
        <section className="brand-container">
        <div className="rectangle">Rectagle</div>
            <BrandSign className="brand typewriter-text"/>
            {/* <div className="triangle-left"></div>
            <div className="triangle-right"></div>             */}
        </section>

        <section className="about">
            <Divider />
            {/* <div className="rectangle">Rectagle</div> */}
            <h1>Welcome to my Website</h1>
            <p>jkljkfd jfkdls fjsakl fsjdkl </p>
        </section>
    </main>

    );
}

export default Home;