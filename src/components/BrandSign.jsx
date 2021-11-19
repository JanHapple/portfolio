import React from "react";
import "../styles/BrandSign.scss";

const BrandSign = () => {
    return(
    <div className="signature-box">
        <div className="brand-box">
            <h2 className="firstBrandLine typewriter-text"><span className="bracket">&#123;</span> j: an,</h2>
            <h2 className="secondBrandLine">h: apple <span className="bracket">&#125;</span></h2>
        </div>   
        <div className="subBrandingFlex"><h5 className="subBranding">&lt;<span className="webdev">web developer</span> /&gt;</h5></div> 
    </div>
    )
    
}

export default BrandSign;