import React from "react";
import Aos from "aos";
import "../styles/BrandSign.scss";

Aos.init();

const BrandSign = () => {
    return(
    <div className="signature-box">
        <div className="brand-box">
            <h2 className="firstBrandLine" data-aos="fade-right" data-aos-anchor="top-top" data-aos-delay="100" data-aos-offset="500" data-aos-duration="1000"><span className="bracket">&#123;</span> j: an,</h2>
            <h2 className="secondBrandLine" data-aos="fade-left" data-aos-anchor="top-right" data-aos-delay="100" data-aos-offset="500" data-aos-duration="1000">h: apple <span className="bracket">&#125;</span></h2>
        </div>   
        <div className="subBrandingFlex" data-aos="fade-up" data-aos-delay="1300" data-aos-anchor-placement="top-bottom"><h5 className="subBranding">&lt;<span className="webdev">web developer</span> /&gt;</h5></div> 
    </div>
    )
    
}

export default BrandSign;